import { ThreadHubCard } from './ThreadHubCard';

const threadHubCardData = [
  {
    input: 'Gere um CSV com os produtos “Best” do Ecommerce.',
  },
  {
    input:
      'Gere um gráfico com as vendas dos 5 produtos de maior venda nas lojas físicas.',
  },
  {
    input:
      'Quais foram as 10 linhas mix de maior crescimento de vendas entre a coleçao de inverno passado e a deste ano?',
  },
];

export function ThreadHub() {
  return (
    <article className="space-y-8 pt-16 lg:pt-[130px]">
      <section className="max-w-[495px]">
        <p className="text-[50px] uppercase leading-[50px]">
          Let&apos;s{' '}
          <span className="gradient-textgradient-text gradient animate-gradient bg-gradient-text bg-400-percent bg-clip-text font-bold text-transparent">
            get started
          </span>{' '}
          with some data.
        </p>
      </section>

      <section className="flex flex-wrap gap-4">
        {threadHubCardData.map((data, index) => (
          <ThreadHubCard
            key={data.input}
            input={data.input}
            delay={index * 0.6}
          />
        ))}
      </section>
    </article>
  );
}
