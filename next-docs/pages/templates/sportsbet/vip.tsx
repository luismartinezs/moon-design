import React, {ReactNode} from "react";
import {Carousel} from '@heathmont/moon-components';
import {Button} from '@heathmont/moon-core-tw';
import Image from 'next/image';
import AdriaticSea from '../private/AdriaticSea.png';
import Arsenal from '../private/Arsenal.png';
import BackPhoto from '../private/BackPhoto.png';
import VipLounge from '../private/Bitcasino_VIPlounge 1.png';
import Detail from '../private/Detail.png';
import Envelope from '../private/Envelope.png';
import Flamengo from '../private/Flamengo.png';
import MagicMan from '../private/magicman.png';
import PastEvents from '../private/PastEvents.png';
import SouthamptonFC from '../private/southamptonFC.png';
import Star from '../private/Star.png';
import Suit from '../private/Suit.png';
import VipLounge2 from '../private/VIPLounge.png';
import WatfordFC from '../private/WatfordFC.png';

interface VipItemProps {
  title: string;
  text: string[];
  icon: any;
  link: {
    label: string;
    url: string;
  }
}

interface Partnership {
  title: string;
  text: string[];
  icon: any;
}

const VipItem = ({title, icon, text, link}: VipItemProps) => {
  return (<div className='w-[272px] h-full bg-gohan rounded-lg flex flex-col p-3 lg:w-[368px]'>
      <div className='flex flex-row justify-between items-center mb-8'>
        <Image src={Detail} className='rotate-90'/>
        <Image src={Detail} className='rotate-180'/>
      </div>
      <div className='h-4/5 px-12'>
        <div className='flex items-center justify-center pt-3 pb-4'>
          <Image src={icon} alt={title}/>
        </div>
        <p className='text-moon-20 text-center mb-4 px-3 w-full'>{title}</p>
        <div className='w-full list-disc'>
          {text?.map((text: string) => (
            <p className="text-moon-14 w-full text-center">{text}</p>
          ))}
        </div>
      </div>
      <a
        href={link.url}
        className='text-moon-14 text-raditz text-center mt-4 -mb-4 px-3 w-full'
      >{link.label}</a>
      <div className='flex flex-row justify-between items-center mb-0'>
        <Image src={Detail}/>
        <Image src={Detail} className='rotate-[260deg]'/>
      </div>
    </div>);
};

const PartnershipItems = ({title, icon, text}: Partnership) => {
  return (
    <div className='w-[272px] bg-gohan rounded-lg flex flex-col p-3 mt-8'>
      <div className='flex flex-row justify-between items-center'>
        <Image src={Detail} className='rotate-90'/>
        <Image src={Detail} className='rotate-180'/>
      </div>
      <div className=' flex flex-col items-center justify-center'>
        <div className='bg-goku flex items-center justify-center w-[116px] h-[116px] rounded-full'>
          <Image src={icon} alt={title} className='mb-2'/>
        </div>
        <p className='text-moon-20 font-semibold text-center w-full pt-3'>{title}</p>
        <div className='w-full list-disc pl-2 pt-2'>
          {text?.map((text: string) => (
            <p className="text-moon-12 text-raditz text-center w-full">{text}</p>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <Image src={Detail}/>
        <Image src={Detail} className='rotate-[260deg]'/>
      </div>
    </div>);
};

const Vip = () => {
  const VipClub = [
    {
      icon: Star,
      title: 'Unique offers, rewards and VIP promotions',
      text: ['From cashback to rebate, free spins, leaderboards, and more - we have you covered!'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Suit,
      title: 'VIP Manager',
      text: ['Personalised attention from one of the individuals below, who will always go the extra mile to meet your gaming needs and desires.'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Envelope,
      title: 'Invitations to prestigious events',
      text: ['Wheather it’s Bali or the Adriatics coast, travel the world with Bitcasino'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Star,
      title: 'Unique offers, rewards and VIP promotions',
      text: ['From cashback to rebate, free spins, leaderboards, and more - we have you covered!'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Suit,
      title: 'VIP Manager',
      text: ['Personalised attention from one of the individuals below, who will always go the extra mile to meet your gaming needs and desires.'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Envelope,
      title: 'Invitations to prestigious events',
      text: ['Wheather it’s Bali or the Adriatics coast, travel the world with Bitcasino'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    }
  ];
  const Partnership = [
    {
      icon: Arsenal,
      title: 'Arsenal FC',
      text: ['English Premiere League']
    },
    {
      icon: SouthamptonFC,
      title: 'Southampton FC',
      text: ['English Premiere League']
    },
    {
      icon: Flamengo,
      title: 'Flamengo',
      text: ['Campeonato Brasileiro']
    },
    {
      icon: WatfordFC,
      title: 'Watford FC',
      text: ['English Premiere League']
    },
    {
      icon: Arsenal,
      title: 'Arsenal FC',
      text: ['English Premiere League']
    },
    {
      icon: SouthamptonFC,
      title: 'Southampton FC',
      text: ['English Premiere League']
    },
    {
      icon: Flamengo,
      title: 'Flamengo',
      text: ['Campeonato Brasileiro']
    },
    {
      icon: WatfordFC,
      title: 'Watford FC',
      text: ['English Premiere League']
    }
  ];
  const Testimonials = [
    {
      text: 'I have been in love and hate relation- ship with Bitcasino.io for a good period of time and I must rephrase my self and it\'s mostly love and thanks to my host Mia, who is all ways there on behalf of casino as ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have played at so many other online casinos and there is always something missing, either a rigged software or a very, very and I repeat very delayed payout. One of the things I love about Bitcasino.io is an instant payout ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have been in love and hate relation- ship with Bitcasino.io for a good period of time and I must rephrase my self and it\'s mostly love and thanks to my host Mia, who is all ways there on behalf of casino as ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have been in love and hate relation- ship with Bitcasino.io for a good period of time and I must rephrase my self and it\'s mostly love and thanks to my host Mia, who is all ways there on behalf of casino as ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have played at so many other online casinos and there is always something missing, either a rigged software or a very, very and I repeat very delayed payout. One of the things I love about Bitcasino.io is an instant payout ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have been in love and hate relation- ship with Bitcasino.io for a good period of time and I must rephrase my self and it\'s mostly love and thanks to my host Mia, who is all ways there on behalf of casino as ...',
      name: 'Zyn*****'
    }
  ];
  const Events = [
    {
      heroImage: AdriaticSea,
      backImage: BackPhoto,
      title: 'Getaways in Adriatic Sea',
      text: 'Entry to this exclusive club is by invitation only. The best way to get an invite is to keep on playing and we will alert you when you have reached the top tier of our Loyalty System.',
      link: {
        label: 'Learn more',
        url: 'https:/google.com'
      }
    },
    {
      heroImage: AdriaticSea,
      backImage: BackPhoto,
      title: 'Another Awesome Event',
      text: 'Entry to this exclusive club is by invitation only. The best way to get an invite is to keep on playing and we will alert you when you have reached the top tier of our Loyalty System.',
      link: {
        label: 'Learn more',
        url: 'https:/google.com'
      }
    }
  ];

  return (<div className='flex flex-col sm:px-[10%] sm:py-20 sm:w-full'>
    <div className='max-w-full sm:relative'>
      <div className='flex flex-col max-w-full px-12 mb-6 z-10000 left-12 bottom-16 sm:w-[500px] sm:absolute'>
        <p className='mt-6 text-center text-moon-24 text-raditz lg:mt-[70px] sm:text-left'>Username</p>
        <p className='text-moon-32 text-center p-4 2xl:text-moon-56 md:text-moon-50 sm:text-moon-32 sm:font-semibold sm:text-left sm:p-0 md:mb-[19px]'>
          Take your seat in the VIP club
        </p>
        <p className='w-full text-moon-18 text-center px-3 pt-2 sm:text-moon-24 sm:text-left sm:p-0'>
          Precisely what you imagined your
          <span className='text-raditz'> VIP Experience</span> could be,
          <span className='sm:underline sm:decoration-[#D9BFA4] sm:decoration-1'> only more. </span>
        </p>
      </div>
      <div>
        <div className='sm:hidden'>
          <Image src={VipLounge}/>
        </div>
        <div className='hidden sm:inline'>
          <Image src={VipLounge2} sizes={'100%'}/>
        </div>
      </div>
    </div>
    <div className='w-full flex max-w-[100vw] items-center mx-12 py-8 -mt-[60px]'>
      <div className='w-[900px] overflow-hidden px-1 lg:w-[1150px]'>
        <Carousel
          selectedIndex={0}
          items={VipClub.map((item) => (<VipItem
            title={item.title}
            text={item.text}
            icon={item.icon}
            link={item.link}
          />))}
        />
      </div>
    </div>
    <div className='mx-12 mt-8'>
      <div className='flex flex-row justify-center items-center -mb-16 rounded-full h-8 bg-gohan md:w-[30%] sm:w-[35%] '>
        <div className='w-[50%] h-[90%] ml-0.5 flex justify-center items-center rounded-full bg-goku'>
          <p className='text-moon-14 xl:text-moon-14 md:text-moon-12 text-center text-raditz sm:text-moon-10'>
            Past events
          </p>
        </div>
        <p className='w-2/4 text-trunks text-moon-14 text-center xl:text-moon-14 md:text-moon-12 sm:text-moon-10'>
          Upcoming events
        </p>
      </div>
      <div className='w-[900px] overflow-hidden px-1 lg:w-[1150px]'>
        <Carousel
          selectedIndex={0}
          items={Events.map((item) => (<div className='min-w-[900px] mt-24 lg:min-w-[1150px] relative'>
            <div className='w-[70%] h-[50%] min-w-[630px] relative'>
              <Image src={item.heroImage} sizes={'100%'}/>
            </div>
            <div className='w-[33%] h-[30%] min-w-[330px] sm:absolute sm:top-[-50px] sm:right-[15px] 2xl:translate-y-[-5%] sm:w-[35%] sm:h-[80%]'>
              <Image src={item.backImage} sizes={'100%'} className='rounded-lg '/>
            </div>
            <div className='flex flex-col min-w-[330px] rounded-[12px] bg-gohan z-10000 2xl:translate-y-[-5%] sm:absolute sm:top-[-25px] sm:right-[40px] sm:w-[35%] sm:h-[80%]'>
              <div className='flex flex-row justify-between items-center m-6'>
                <Image src={Detail} className='rotate-90'/>
                <Image src={Detail} className='rotate-180'/>
              </div>
              <div className='flex flex-col items-left px-10 xl:justify-end shrink basis-full sm:justify-center sm:items-center'>
                <div>
                  <p className='md:text-left xl:text-moon-32 lg:text-moon-24 mb-4 sm:text-center'>
                    {item.title}
                  </p>
                  <p className='hidden xl:flex xl:text-moon-14 lg:text-moon-12 opacity-80 mb-4 xl'>
                    {item.text}
                  </p>
                  <a href={item.link.url} className='text-raditz text-moon-14 md:text-left sm:text-center'>{item.link.label}</a>
                </div>
              </div>
              <div className='flex flex-row m-6 justify-between items-center'>
                <Image src={Detail}/>
                <Image src={Detail} className='rotate-[260deg]'/>
              </div>
            </div>
          </div>))}
        />
      </div>
    </div>
    <div className='w-[100%] sm:hidden'>
      <Image src={PastEvents} sizes={'100%'}/>
    </div>
    <div className='hidden mt-12 sm:block'>
      <p className='text-center pt-4 text-moon-32 font-semibold sm:pl-0'>Partnership</p>
      <div className='w-[900px] mx-12 lg:w-[1150px]'>
        <Carousel
          scrollTo={0}
          items={Partnership.map((item) => (<PartnershipItems
            title={item.title}
            text={item.text}
            icon={item.icon}
          />))}
        />
      </div>
      <div className='mt-12 px-12'>
        <div className='flex flex-row items-center mt-6 mb-4 rounded-full h-8 bg-gohan md:w-[30%] sm:w-[40%] '>
          <div className='w-2/4 h-5/6 ml-0.5 rounded-full bg-goku'>
            <p className='text-moon-14 text-center text-raditz'>Football clubs</p>
          </div>
          <p className='w-2/4 text-trunks text-moon-14 text-center'>Ambassadors</p>
        </div>
      </div>
    </div>
    <p className='text-moon-32 px-5 mt-12 text-center sm:pl-0 sm:px-0'>Here’s what our customers say about being a VIP</p>
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-[870px] flex flex-row justify-center mx-12'>
        <Carousel
          scrollTo={0}
          items={Testimonials.map((item) => (<div className='flex w-[272px] h-[344px] mr-1 mt-20 bg-gohan rounded-lg flex-col p-3'>
            <div className='flex flex-row justify-between items-center'>
              <Image src={Detail} className='rotate-90'/>
              <Image src={Detail} className='rotate-180'/>
            </div>
            <div className='h-4/5 flex flex-col items-left xl:justify-end shrink basis-full'>
              <div className='w-full list-disc text-moon-16 pl-4 mb-8 sm:text-moon-14'>
                {item.text}
              </div>
              <p className='pl-4'>{item.name}</p>
            </div>
            <div className='flex flex-row justify-between items-center mt-4'>
              <Image src={Detail}/>
              <Image src={Detail} className='rotate-[260deg]'/>
            </div>
          </div>))}
        />
      </div>
      <div className='w-[870px] flex flex-col mx-12 sm:flex-row sm:py-20 sm:top-0 sm:items-center'>
        <div className='flex flex-col max-w-full mt-6 sm:mr-12 sm:w-[600px] sm:justify-center'>
          <p className='text-center text-moon-24 sm:text-left sm:text-moon-32 sm:font-semibold'>How to become a VIP ?</p>
          <p className='text-moon-16 text-center p-2 sm:text-left sm:pl-0 sm:opacity-80 sm:pt-[12px]'>
            Entry to this exclusive club is by invitation only. The best way
            to get an invite is to keep on playing and we will alert you when you have reached the top tier of our
            <span className='text-raditz'> Loyalty System</span>
          </p>
          <p className='text-moon-16 text-center px-3 pt-2 sm:text-left sm:pl-0 sm:opacity-80'>
            Think you have what it takes? Ready to take things to the next level?
            <span className='text-raditz'> Don’t delay</span>
          </p>
          <Button className='mt-6 mx-5 mb-4 rounded-full h-12 bg-[#49B356] sm:ml-0 sm:w-6/12 lg:w-[55%] md:w-full'>
            Create your account now!
          </Button>
        </div>
        <div className='hidden sm:inline'>
          <Image src={MagicMan}/>
        </div>
      </div>
    </div>
  </div>);
}

Vip.getLayout = function getLayout(page: ReactNode) {
  return (<div className='w-full min-h-screen sb-dark bg-goku text-white'>{page}</div>);
};

export default Vip;
