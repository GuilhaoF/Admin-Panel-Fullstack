import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen bg-[#dfe4ea]">
      <div className="relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-center rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
          <Image src='/logo-app.png' width={64} height={64} alt='Logo Dinheiro' />
          <h2 className=' font-bold text-base'>FaturaNow</h2>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}