import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <title>{'TalksUp'}</title>
        <meta name='author' content='Sebasvil20' />
        <meta name='description' content={`TalksUp - Find your next podcast`} />
        <meta name='keywords' content={`podcasts, recommendations, app`} />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta
          property='og:title'
          content={"Talk's up find your next podcast"}
        />
        <meta property='og:url' content='https://web.talksup.app/' />
        <meta
          property='og:image'
          content='https://talksupcdn.sfo3.cdn.digitaloceanspaces.com/724ecd00-de05-11ec-b35a-e62effe0ba4e.png'
        />
        <meta
          name='twitter:title'
          content="Talk's Up - Find your next podcast"
        />
        <meta
          name='twitter:description'
          content='See thru the biggest podcast community'
        />
        <meta
          name='twitter:image'
          content='https://talksupcdn.sfo3.cdn.digitaloceanspaces.com/724ecd00-de05-11ec-b35a-e62effe0ba4e.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className='bg-white'>
        <div className='max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='md:flex md:items-center md:gap-12'>
              <a className='block text-teal-600' href='/'>
                <span className='sr-only'>Inicio</span>
                <svg
                  width='170'
                  height='90'
                  viewBox='0 0 267 72'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M29.304 47.44C29.304 48.256 29.112 49.048 28.728 49.816C26.472 53.848 22.464 55.864 16.704 55.864C12.432 55.864 9.096 54.616 6.696 52.12C4.296 49.576 3.096 46.072 3.096 41.608V13.6C3.096 11.968 3.528 10.696 4.392 9.784C5.256 8.824 6.456 8.344 7.992 8.344C9.576 8.344 10.8 8.824 11.664 9.784C12.528 10.696 12.96 11.968 12.96 13.6V20.44H23.04C24.528 20.44 25.704 20.848 26.568 21.664C27.432 22.432 27.864 23.512 27.864 24.904C27.864 26.344 27.432 27.472 26.568 28.288C25.704 29.056 24.528 29.44 23.04 29.44H12.96V41.968C12.96 43.504 13.32 44.704 14.04 45.568C14.808 46.432 15.864 46.864 17.208 46.864C18.792 46.864 20.112 46.12 21.168 44.632C22.08 43.432 23.304 42.832 24.84 42.832C26.184 42.832 27.264 43.264 28.08 44.128C28.896 44.944 29.304 46.048 29.304 47.44ZM64.3776 20.008C65.9616 20.008 67.1856 20.464 68.0496 21.376C68.9136 22.288 69.3456 23.56 69.3456 25.192V50.176C69.3456 51.808 68.9136 53.104 68.0496 54.064C67.1856 54.976 65.9616 55.432 64.3776 55.432C61.6896 55.432 60.0816 54.088 59.5536 51.4H59.4096C56.8176 54.376 53.2416 55.864 48.6816 55.864C43.6896 55.864 39.6576 54.208 36.5856 50.896C35.1936 49.36 34.1616 47.752 33.4896 46.072C32.5296 43.24 32.0496 40.456 32.0496 37.72C32.0496 34.888 32.5296 32.128 33.4896 29.44C34.4976 26.704 36.3936 24.352 39.1776 22.384C42.0096 20.368 45.1776 19.432 48.6816 19.576C53.2416 19.576 56.8176 21.064 59.4096 24.04H59.5536C60.0816 21.352 61.6896 20.008 64.3776 20.008ZM44.5056 44.344C46.0896 46.024 48.1536 46.864 50.6976 46.864C53.2416 46.864 55.3296 46 56.9616 44.272C58.6416 42.544 59.4816 40.36 59.4816 37.72C59.4816 35.08 58.6416 32.896 56.9616 31.168C55.3296 29.44 53.2416 28.576 50.6976 28.576C48.1536 28.576 46.0896 29.416 44.5056 31.096C42.9216 32.776 42.1296 34.984 42.1296 37.72C42.1296 40.456 42.9216 42.664 44.5056 44.344ZM81.6947 4.168C83.2787 4.168 84.5027 4.648 85.3667 5.608C86.2307 6.52 86.6627 7.792 86.6627 9.424V50.176C86.6627 51.808 86.2307 53.104 85.3667 54.064C84.5027 54.976 83.2787 55.432 81.6947 55.432C80.1587 55.432 78.9587 54.976 78.0947 54.064C77.2307 53.104 76.7987 51.808 76.7987 50.176V9.424C76.7987 7.792 77.2307 6.52 78.0947 5.608C78.9587 4.648 80.1587 4.168 81.6947 4.168ZM115.694 35.848L125.486 46.648C126.398 47.656 126.902 48.952 126.998 50.536C126.998 52.024 126.542 53.224 125.63 54.136C124.766 55 123.59 55.432 122.102 55.432C120.47 55.432 119.102 54.736 117.998 53.344L108.494 41.536L104.03 44.992V50.176C104.03 51.808 103.598 53.104 102.734 54.064C101.87 54.976 100.646 55.432 99.0619 55.432C97.5259 55.432 96.3259 54.976 95.4619 54.064C94.5979 53.104 94.1659 51.808 94.1659 50.176V9.424C94.1659 7.792 94.5979 6.52 95.4619 5.608C96.3259 4.648 97.5259 4.168 99.0619 4.168C100.646 4.168 101.87 4.648 102.734 5.608C103.598 6.52 104.03 7.792 104.03 9.424V34.048L118.214 21.592C119.27 20.536 120.494 20.008 121.886 20.008C123.326 20.008 124.478 20.44 125.342 21.304C126.206 22.168 126.638 23.32 126.638 24.76C126.686 26.344 126.062 27.64 124.766 28.648L115.694 35.848ZM140.56 31.168C140.512 32.032 141.016 32.656 142.072 33.04C143.128 33.424 144.928 33.616 147.472 33.616C152.848 33.616 156.712 34.504 159.064 36.28C161.464 38.056 162.664 40.792 162.664 44.488C162.664 48.04 161.296 50.824 158.56 52.84C155.872 54.856 152.176 55.864 147.472 55.864C143.68 55.864 140.632 55.576 138.328 55C136.024 54.424 133.96 53.416 132.136 51.976C131.128 51.208 130.576 50.08 130.48 48.592C130.48 47.248 130.864 46.168 131.632 45.352C132.448 44.536 133.504 44.128 134.8 44.128C136.048 44.128 137.128 44.512 138.04 45.28C140.248 46.72 143.128 47.44 146.68 47.44C150.856 47.44 152.944 46.384 152.944 44.272C152.992 43.36 152.464 42.688 151.36 42.256C150.304 41.824 148.432 41.608 145.744 41.608C140.464 41.608 136.648 40.768 134.296 39.088C131.992 37.36 130.84 34.696 130.84 31.096C130.84 27.544 132.184 24.736 134.872 22.672C137.608 20.608 141.352 19.576 146.104 19.576C151.912 19.576 156.256 20.632 159.136 22.744C160.48 23.752 161.152 24.976 161.152 26.416C161.152 27.76 160.744 28.84 159.928 29.656C159.112 30.472 158.056 30.88 156.76 30.88C155.512 30.784 154.456 30.424 153.592 29.8C151.72 28.6 149.464 28 146.824 28C144.856 28 143.32 28.288 142.216 28.864C141.112 29.44 140.56 30.208 140.56 31.168Z'
                    fill='black'
                  />
                  <path
                    d='M214.237 20.008C215.773 20.008 216.973 20.464 217.837 21.376C218.701 22.288 219.133 23.56 219.133 25.192V50.536C219.085 51.976 218.605 53.152 217.693 54.064C216.781 54.976 215.605 55.432 214.165 55.432C211.525 55.432 209.917 54.136 209.341 51.544H209.197C206.749 54.424 203.317 55.864 198.901 55.864C194.245 55.864 190.693 54.496 188.245 51.76C185.797 49.024 184.573 45.064 184.573 39.88V25.192C184.573 23.56 185.005 22.288 185.869 21.376C186.733 20.464 187.933 20.008 189.469 20.008C191.053 20.008 192.277 20.464 193.141 21.376C194.005 22.288 194.437 23.56 194.437 25.192V38.728C194.437 44.152 196.789 46.864 201.493 46.864C203.941 46.864 205.837 46.072 207.181 44.488C208.573 42.904 209.269 40.672 209.269 37.792V25.192C209.269 23.56 209.701 22.288 210.565 21.376C211.429 20.464 212.653 20.008 214.237 20.008ZM247.299 19.576C252.291 19.576 256.299 21.232 259.323 24.544C260.619 26.032 261.603 27.616 262.275 29.296C262.995 30.976 263.403 32.224 263.499 33.04C263.643 33.856 263.763 35.176 263.859 37C263.907 37.336 263.931 37.576 263.931 37.72C263.931 40.504 263.427 43.288 262.419 46.072C261.507 48.76 259.635 51.112 256.803 53.128C253.971 55.096 250.803 56.008 247.299 55.864C242.787 55.864 239.235 54.424 236.643 51.544H236.499V63.568C236.499 65.2 236.067 66.472 235.203 67.384C234.339 68.344 233.115 68.824 231.531 68.824C229.995 68.824 228.795 68.344 227.931 67.384C227.067 66.472 226.635 65.2 226.635 63.568V25.192C226.635 23.56 227.067 22.288 227.931 21.376C228.795 20.464 229.995 20.008 231.531 20.008C234.267 20.008 235.899 21.328 236.427 23.968H236.571C239.211 21.04 242.787 19.576 247.299 19.576ZM238.947 44.272C240.627 46 242.739 46.864 245.283 46.864C247.827 46.864 249.891 46.024 251.475 44.344C253.059 42.664 253.851 40.456 253.851 37.72C253.851 34.984 253.059 32.776 251.475 31.096C249.891 29.416 247.827 28.576 245.283 28.576C242.739 28.576 240.627 29.44 238.947 31.168C237.315 32.896 236.499 35.08 236.499 37.72C236.499 40.36 237.315 42.544 238.947 44.272Z'
                    fill='#6334EB'
                  />
                  <path
                    d='M172.481 12V45.7722'
                    stroke='#6334EB'
                    stroke-width='7'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M172.481 12L162 17.2405'
                    stroke='#6334EB'
                    stroke-width='7'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M172.481 12L182.962 17.2405'
                    stroke='#6334EB'
                    stroke-width='7'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </a>
            </div>

            <div className='flex items-center gap-4'>
              <div className='sm:gap-4 sm:flex'>
                <a
                  className='px-5 py-2.5 text-sm font-medium text-white bg-violet-700  hover:bg-violet-500 rounded-md shadow'
                  href='https://www.talksup.app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Registrate ahora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <aside className='relative overflow-hidden text-gray-300 w-4/5 m-auto h-50 md:h-screen  lg:flex'>
        <div className='p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left flex items-center'>
          <div className='max-w-xl mx-auto lg:ml-0'>
            <p className='mt-2 text-5xl text-gray-600 font-bold sm:text-7xl'>
              Encuentra tu siguiente podcast
            </p>

            <p className='text-sm mt-8  text-gray-400 font-medium'>
              Guarda, comparte y reseña tus podcast favoritos, todo en un solo
              lugar.
            </p>
            <a
              href='https://www.talksup.app'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-violet-500 rounded-lg hover:bg-violet-300'
            >
              Empieza ahora +
            </a>
          </div>
        </div>

        <div className='relative w-full sm:h-96 lg:w-1/2 lg:h-auto overflow-visible'>
          <img
            src='/Listener.png'
            alt='Women looking for podcasts'
            className='absolute inset-0 object-cover w-full h-full'
          />
        </div>
      </aside>

      <section className='text-white '>
        <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-violet-300 via-blue-500 to-purple-600'>
              Descubre tu siguiente podcast favorito
            </h1>

            <p className='max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl'>
              Busca las reviews de otros que te parezcan interesantes
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2'>
            <a
              href='https://www.talksup.app'
              target='_blank'
              rel='noopener noreferrer'
              className='relative block overflow-hidden bg-center bg-no-repeat bg-cover  rounded-xl'
              style={{
                backgroundImage: 'url(/Mask_group.png)',
              }}
            >
              <span className='absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full  right-4 top-4'>
                Feature
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 ml-1.5 text-yellow-300'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </span>

              <div className='relative p-8 pt-40 text-white bg-black bg-opacity-40'>
                <h5 className='text-2xl font-bold'>Trending podcasts</h5>

                <p className='text-sm'>
                  Obten los ultimos podcasts y decide a partir de las reviews
                </p>
              </div>
            </a>
            <a
              href='https://www.talksup.app'
              target='_blank'
              rel='noopener noreferrer'
              className='relative block overflow-hidden bg-center bg-no-repeat bg-cover  rounded-xl'
              style={{
                backgroundImage: 'url(/Card.png)',
              }}
            >
              <span className='absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full  right-4 top-4'>
                Feature
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 ml-1.5 text-yellow-300'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </span>

              <div className='relative p-8 pt-40 text-white bg-black bg-opacity-30'>
                <h5 className='text-2xl font-bold'>Recomendaciones para ti</h5>

                <p className='text-sm'>
                  Define tus gustos y recibe recomendaciones personalizadas
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <aside className='relative overflow-hidden text-gray-300 w-4/5 m-auto h-5/6  lg:flex'>
        <div className='p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left flex items-center'>
          <div className='max-w-xl mx-auto lg:ml-0'>
            <p className='text-sm text-violet-400 font-medium'>
              Agrega tus reviews
            </p>
            <p className='mt-2 text-3xl text-gray-700 font-bold sm:text-6xl'>
              Discute con otros amantes del podcast
            </p>

            <p className='text-sm mt-3  text-gray-400 font-medium'>
              Y comparte tu opinion con ellos!
            </p>
          </div>
        </div>

        <div className='relative w-full sm:h-96 lg:w-1/2 lg:h-auto  flex items-center justify-center'>
          <img
            src='/mini_1.png'
            alt='Women looking for podcasts'
            className='inset-0 object-fit'
          />
        </div>
      </aside>

      <section
        className='px-2 py-32 md:px-0 overflow-hidden bg-center bg-no-repeat bg-cover  '
        style={{
          backgroundImage: 'url(/Footer.png)',
        }}
      >
        <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
          <div className='flex flex-wrap items-center sm:-mx-3'>
            <div className='w-full md:w-1/2 md:px-3'>
              <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
                <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>
                  <span className='block xl:inline'>
                    ¿Que estas esperando para unirte?
                  </span>
                </h1>
                <div className='relative flex flex-col sm:flex-row sm:space-x-4'>
                  <a
                    href='https://www.talksup.app'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center w-full px-8 py-5 mb-3 text-lg text-violet-700 bg-white rounded-full sm:mb-0 hover:bg-gray-100 sm:w-auto'
                  >
                    Registrate ahora!
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl'>
                <img src='/listener2.png' className='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
