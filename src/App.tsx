import { Component, createSignal } from "solid-js";
import textLogo from "../src/assets/svg/TextLogo.svg";
import iconLogo from "../src/assets/svg/IconLogo.svg";
import menu from "../src/assets/svg/Menu.svg"

const App: Component = () => {
  return (
    <div class="bg-ng-dark min-h-screen">
      <Header />
      <Body />
    </div>
  );
};

export default App;

const Header: Component = () => {
  const [isMenuVisible, setIsMenuVisible] = createSignal(false)

  return (
    <div class="px-8 lg:px-16 pt-8 flex flex-row justify-between items-center">
      <a href="/" class="min-w-fit">
        <img src={textLogo} alt="logo" class="hidden lg:flex" />
        <img src={iconLogo} alt="logo" class="flex lg:hidden" />
      </a>
      <div>
        <div onClick={() => {
          setIsMenuVisible(!isMenuVisible())
          console.log(isMenuVisible())
        }}>
          <img src={menu} alt="menu" class="flex lg:hidden cursor-pointer" />
        </div>
        <div class="hidden lg:grid grid-cols-3 gap-x-6 text-right text-white font-ng-mono items-center">
          <a
            href="mailto:team@ngoding.org"
            class="hover:underline decoration-ng-yellow underline-offset-4"
          >
            hubungi_kami <span class="text-ng-yellow">/&gt;</span>
          </a>
          <a
            href="https://twitter.com/ngodingorg"
            target="_blank"
            class="hover:underline decoration-ng-yellow underline-offset-4"
          >
            bantu_sebarkan <span class="text-ng-yellow">/&gt;</span>
          </a>
          <a
            href="https://github.com/ngodingorg"
            target="_blank"
            class="hover:underline decoration-ng-yellow underline-offset-4"
          >
            ikut_kontribusi <span class="text-ng-yellow">/&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Body: Component = () => {
  return (
    <div class="mx-8 lg:mx-16 mt-8 md:mt-16 grid grid-rows-2 lg:grid-cols-2 gap-y-8 md:gap-y-16 lg:gap-x-24">
      <div>
        <p class="font-ng-mono text-white text-4xl md:text-6xl">
          Kini semua orang bisa belajar &lt;
          <span class="text-ng-yellow">pemrograman_</span>&gt;
        </p>
      </div>
      <div>
        <p class="font-ng-text text-white text-lg md:text-2xl font-light">
          Misi &lt;<span class="text-ng-yellow">ngoding.org</span>&gt; adalah
          untuk membantu banyak orang untuk belajar pemrograman secara gratis.
        </p>
      </div>
    </div>
  );
};
