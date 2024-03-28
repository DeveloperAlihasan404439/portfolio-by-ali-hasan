import duay from '../../assets/projact/duay.png';
import bodypulse from '../../assets/projact/bodypulse.png';
import careerpulse from '../../assets/projact/carer pulse.png'; // Fixed typo in filename
import eventmenagement from '../../assets/projact/event-menagement.png';
import communit from '../../assets/projact/commint-calcaral.png'; // Fixed typo in filename
import brand_shop from '../../assets/projact/brand-shop.png';
import donation from '../../assets/projact/donation.png'; // Fixed typo in variable name

import Image from 'next/image';

export default function Project() {
    const projectList = [
        {
          "id": '1',
          "title": 'Dua Page',
          "image": duay,
          "demo": 'https://duay.vercel.app',
          "github": 'https://github.com/DeveloperAlihasan404439/IRD-job-task'
        },
        {
          "id": '2',
          "title": "Body Pulse",
          "image": bodypulse,
          "demo": 'https://bodypulse-assignament-12.surge.sh',
          "github": 'https://github.com/DeveloperAlihasan404439/Body-pulse-client-site'
        },
        {
          "id": '3',
          "title": "Career Pulse",
          "image": careerpulse,
          "demo": 'https://authfirebaseassignament11.web.app',
          "github": 'https://github.com/DeveloperAlihasan404439/careee-pulse-client-site'
        },
        {
          "id": '4',
          "title": "Event Menagement",
          "image": eventmenagement,
          "demo": 'https://event-menagement-surge.surge.sh',
          "github": 'https://github.com/DeveloperAlihasan404439/event-management'
        },
        {
          "id": '5',
          "title": "Communit Cultural",
          "image": communit,
          "demo": 'https://communitd-cultural.surge.sh',
          "github": 'https://github.com/DeveloperAlihasan404439/Communitd-and-Cultural-Cliend'
        },
        {
          "id": '6',
          "title": "Brand Shop",
          "image": brand_shop,
          "demo": 'https://github.com/DeveloperAlihasan404439/brand-shiop-10',
          "github": 'https://github.com/DeveloperAlihasan404439/brand-shiop-10'
        },
        {
          "id": '7',
          "title": "Donation",
          "image": donation,
          "demo": 'https://donation-projact.surge.sh',
          "github": 'https://github.com/DeveloperAlihasan404439/donation-projact'
        },
    ];

    return (
        <div id="project" className="mt-10 w-11/12 max-w-7xl mx-auto">
            <h2 className="text-2xl text-center font-medium ">
                <span className="border-b-2 border-[#25BFBF] md:pb-1 transition-[.4s] hover:text-[#25BFBF]">My Project</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                {projectList?.map(project => (
                    <div key={project.id} className='border_shadow '>
                        <Image width={500} height={600} src={project.image} alt={project?.title} className='w-full h-[300px]'/> 
                    </div>
                ))}
            </div>
        </div>
    );
}
