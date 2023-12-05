'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {

  const searchParams = useSearchParams();
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) =>  {
    const params = new URLSearchParams(searchParams)
    params.set('page','1')
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    /*
${pathname}é o caminho atual, no seu caso, "/dashboard/invoices".
À medida que o usuário digita na barra de pesquisa, params.toString()traduz essa entrada em um formato compatível com URL.
replace(${pathname}?${params.toString()})atualiza o URL com os dados de pesquisa do usuário. Por exemplo, /dashboard/invoices?query=leese o usuário pesquisar por “Lee”.
A URL é atualizada sem recarregar a página, graças à navegação do lado do cliente do Next.js (que você aprendeu no capítulo sobre navegação entre páginas ).
*/
    replace(`${pathname}?${params.toString()}`);
  },300)

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()} //garanti que o campo seja atualizado com a url e que sera preenchido
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
