import classNames from 'classnames';

import headerBgCover from '@/assets/header_bg_cover.svg';
import logo from '@/assets/logo.png';
import p1Img from '@/assets/p_1.png';
import p2Img from '@/assets/p_2.png';
import p3Img from '@/assets/p_3.png';

import styles from './app.module.less';
import { BLACK_KEYS, WHITE_KEYS } from './utils/constants';

function App() {
  const renderKey = (key: string) => {
    const [name, pitch] = key.split('_');
    return (
      <div className="relative">
        {name}
        <div
          className={classNames({
            'absolute -top-1 left-1/2 w-1 h-1 rounded-full bg-black': !!pitch,
            '-top-1': pitch === 'HIGH',
            'bottom-0': pitch === 'LOW',
          })}
        ></div>
      </div>
    );
  };

  return (
    <div className="w-svw h-svh bg-white overflow-x-hidden">
      <div
        className={classNames(
          styles['header-bg'],
          'flex flex-col items-center relative min-h-[40vh] text-white pt-8 pb-24 mb-10',
        )}
      >
        <img src={headerBgCover} className="absolute left-0 bottom-0 w-full bg-cover -mb-[3px]" />
        <header className="header flex justify-between px-10 w-full">
          <img src={logo} className="logo size-12" />
          <a
            href="https://apps.apple.com/cn/app/simple-chord/id6472777437?mt=12"
            target="_blank"
            className="download-button flex justify-center items-center h-12 px-3 bg-white rounded text-[#7247FF] text-sm cursor-pointer hover:scale-110 transition-transform"
          >
            Download
          </a>
        </header>
        <div className="flex-1"></div>
        <section className="text-center">
          <h1>Simple Chord</h1>
          <br />
          <div className="text-xl">一款实时显示和弦和乐谱的钢琴模拟器</div>
          <div className="text-xl">随时随地享受音乐的乐趣</div>
        </section>
        <div className="keyboard absolute bottom-0 h-10">
          <ul className="black-key flex w-full absolute left-0 top-0 px-5">
            {BLACK_KEYS.map((key, index) => (
              <li
                key={key || index}
                className={classNames(
                  'flex justify-center items-end list-none mx-2 w-6 h-12',
                  !!key &&
                    'bg-black shadow-[0_0_5px_rgba(0,0,0,0.5)] hover:scale-y-110 origin-top transition-transform duration-300 z-10',
                )}
              >
                {renderKey(key)}
              </li>
            ))}
          </ul>
          <ul className="white-key flex shadow-2xl">
            {WHITE_KEYS.map((key) => (
              <li
                key={key}
                className="flex justify-center items-end list-none w-10 h-20 bg-white border border-solid border-black ml-[-1px] hover:scale-y-110 origin-top transition-transform duration-300 z-0  text-black"
              >
                {renderKey(key)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="intro px-10 py-32">
        <div className="flex items-center">
          <div className="flex-1">
            <img src={p1Img} className="shadow-xl" />
          </div>
          <div className="ml-40 flex-1">
            <div className="text-3xl mb-6">可以用MIDI、键盘或鼠标来演奏钢琴</div>
            <div className="">无论你是初学者还是高手，你都可以在SimpleChord中找到适合你的方式。</div>
          </div>
        </div>
      </div>
      <div className="intro px-10 py-20 bg-black text-white">
        <div className="flex items-center">
          <div className="flex-1 mr-40 text-right">
            <div className="text-3xl leading-loose">
              随时查看你演奏的和弦和乐谱
              <br />
              学习音乐理论和技巧
              <br />
              创作你自己的旋律
            </div>
          </div>
          <div className="flex items-center gap-5 flex-1">
            <img src={p2Img} className="shadow-xl w-96 mb-72" />
            <img src={p3Img} className="shadow-xl w-96" />
          </div>
        </div>
      </div>
      <footer className="flex flex-col justify-center items-center h-72">
        <img src={logo} className="size-24" />
        <h1 className="mt-6">Simple Chord</h1>
      </footer>
    </div>
  );
}

export default App;
