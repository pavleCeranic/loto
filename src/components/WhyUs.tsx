import React from 'react';
import { Section } from './ui/Section';
import {
  ShieldCheck,
  Truck,
  PenTool,
  Palette,
  Wrench,
  Puzzle} from
'lucide-react';
const features = [
{
  icon: Palette,
  title: 'Велики избор материјалa',
  description:
  'Нудимо велики избор материјала, декора и произвођача за потпуно прилагођен изглед вашег простора.'
},
{
  icon: ShieldCheck,
  title: 'Сваки буџет је добродошао',
  description:
  'Скучен буџет? Није проблем. Прилагођавамо рјешења вашим финансијским могућностима без компромиса у квалитету израде.'
},
{
  icon: PenTool,
  title: 'Од једноставног до сложеног',
  description:
  'Од мањих комада намјештаја до комплетног уређења стана — израђујемо рјешења по вашој мјери.'
},
{
  icon: Wrench,
  title: 'Подршка и након уградње',
  description:
  'Сарадња не завршава монтажом. Доступни смо за накнадне измјене, поправке и прилагођавања — кад год вам затреба.'
},
{
  icon: Puzzle,
  title: 'Све за ваш ентеријер',
  description:
  'Код нас можете одабрати и судопере, ручкице, уређаје, окове и осталу опрему — све на једном мјесту.'
},
{
  icon: Truck,
  title: 'Достава и монтажа',
  description:
  'Бесплатна достава и стручна монтажа укључени су у цијену сваког пројекта.'
}];

const stats = [
{ value: '30+', label: 'година искуства' },
{ value: '5000+', label: 'урађених кухиња' },
{ value: '1', label: 'мјесто за цијели стан' }];

export function WhyUs() {
  return (
    <Section id="o-nama" background="dark" className="text-white">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-end mb-14 md:mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            Зашто одабрати Лото намјештај?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            Од кухиња и плакара до дневних соба, купатила и осталог намјештаја по мјери — код нас можете реализовати комплетно уређење стана или пословног простора на једном мјесту.
          </p>
        </div>

        <div className="grid grid-cols-3 border-t border-white/20 pt-6">
          {stats.map((stat) =>
          <div key={stat.label}>
              <strong className="block text-3xl md:text-4xl font-extrabold text-white">{stat.value}</strong>
              <span className="text-xs md:text-sm text-white/60">{stat.label}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/20 border border-white/20">
        {features.map((feature, index) =>
        <div key={index} className="flex flex-col gap-3 bg-[#C41E3A] p-7 md:p-8">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#F5E6D3]">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {feature.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        )}
      </div>
    </Section>);

}
