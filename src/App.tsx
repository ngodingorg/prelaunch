import type { Component } from "solid-js";
import logoText from "../src/assets/textLogo.svg";

const App: Component = () => {
  return (
    <div class="bg-ng-dark min-h-screen">
      <Header />
    </div>
  );
};

export default App;

const Header: Component = () => {
  return (
    <div class="px-16 pt-8 flex flex-row justify-between items-center">
      <img src={logoText} alt="logo" />
      <div class="grid grid-cols-3 gap-x-6 text-right text-white font-ng-mono items-center">
        <a href="mailto:team@ngoding.org" class="cursor-pointer hover:underline decoration-ng-yellow underline-offset-4">
          hubungi_kami <span class="text-ng-yellow">/&gt;</span>
        </a>
        <a href="https://twitter.com/ngodingorg" target="_blank" class="cursor-pointer hover:underline decoration-ng-yellow underline-offset-4">
          bantu_sebarkan <span class="text-ng-yellow">/&gt;</span>
        </a>
        <a href="https://github.com/ngodingorg" target="_blank" class="cursor-pointer hover:underline decoration-ng-yellow underline-offset-4">
          ikut_kontribusi <span class="text-ng-yellow">/&gt;</span>
        </a>
      </div>
    </div>
  );
};
