import { ServiceName, Skill } from '@/types';
import Image from 'next/image';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DEFAULT_ROWS_TO_SHOW = 7;

function Skills({
  skills,
  selectedServiceName,
}: SkillsProps) {

  const [showAll, setShowAll] = React.useState<boolean>(false);
  const numberOfSkillsToShow = showAll ? skills.length : DEFAULT_ROWS_TO_SHOW;

  const toggleShowMore = () => {
    if (!showAll) window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setShowAll(prev => !prev);
  };

  const filteredSkills = skills.filter(el => selectedServiceName ? el.relatedService.includes(selectedServiceName) : true);

  return (
    <div>
      {filteredSkills.slice(0, numberOfSkillsToShow).map((skill, index) => {
        return (
          <div className={`w-full bg-gray-800 rounded-xl p-4 shadow-lg mb-4`} key={`skill-${index}`}>
            <div className="grid grid-cols-6 gap-4 mb-2">
              <Image
                className="rounded-full mr-4 col-span-1"
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
              />
              <div className='flex items-center col-span-5 h-full'>
                <p className="font-normal text-lg justify-center">{skill.name}</p>
              </div>
            </div>
            <div className='flex items-center col-span-12 h-full mt-4'>
              <Progress value={skill.level} style={{ height: '10px' }} />
            </div>
          </div>
        );
      })}
      {filteredSkills.length > DEFAULT_ROWS_TO_SHOW && (
        <div className='w-full'>
          <Button onClick={toggleShowMore} variant={'ghost'} className='rounded-ful hover:bg-gray-700 hover:rounded-full transition-colors'>
            {showAll ? 'Show less' : 'Show more'}
            {showAll
              ? <ChevronUp size={'3em'} className='animate-bounce' />
              : <ChevronDown size={'3em'} className='animate-bounce' />
            }
          </Button>
        </div>
      )}
    </div>
  );
}

interface SkillsProps {
  skills: Skill[];
  selectedServiceName: ServiceName | null;
}

export default Skills;