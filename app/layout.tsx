import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata} from 'next'

export const meta: Metadata = {
  title: 'FaturaNow',
  applicationName: 'FaturaNow',
  description: 'Aplicacao de controle de faturas',
  viewport: 'width=device-width, initial-scale=1',
  referrer: 'origin-when-cross-origin',
  creator:'Luis Felipe G Silva',
  publisher:'Luis Felipe G Silva',
  keywords: ['FaturaNow, Controle de Faturas, Controle de Gastos, Controle de Contas'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
