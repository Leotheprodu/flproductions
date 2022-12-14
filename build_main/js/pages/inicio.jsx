import { IconVideo, IconMicrophone, IconZoomMoney } from '@tabler/icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PalabrasDelEquipo, SimpleText, InfoCard, FormulariodeContacto, NuestrasCaracteristicas, Testimonio } from '../components';

const InfoCardSize = 40
const infoCardStroke = 2

export function HomePage() {

  return(
    
    <>
      <HelmetProvider>
        <Helmet>
          <title>FLProductions | Inicio</title>
          <meta name="description" content="Somos un estudio de grabación y producción musical en Costa Rica, ofrecemos todo para tu proyecto musical." />
          <meta property="og:title" content="FLProductions | Inicio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://flproductionscr.com/" />
          <meta property="og:image" content="https://flproductionscr.com/build_main/img/header-main.png" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
        </Helmet>
        <div className='contenedor'>
          <SimpleText 
            tipo={1} 
            titulo='Estudio de grabación y producción musical' 
            texto={<p>Desde Siquirres de Limón, Costa Rica, ofrecemos un servicio profesional de grabación y producción musical, queremos ofrecerte todo lo que necesitas para que tu proyecto musical sea todo un éxito.</p>} 
          />

          <div className='inicio_info1_servicios-cards'>
            <InfoCard 
              icon={
                <IconMicrophone 
                size={InfoCardSize} 
                stroke={infoCardStroke}/>
              }
              titulo='GRABACIÓN Y PRODUCCIÓN MUSICAL'
              texto='Con mas de 10 años de experiencia ofreciendo grabaciones profesionales, producción de instrumentales, mezcla y masterización cristalina, potente, siempre actualizada, al máximo volumen y de alta calidad. Hacemos que cada proyecto siempre llegue al próximo nivel. Trabajamos de todo tipo de género musical.'

            />
            <InfoCard 
              icon={
                <IconZoomMoney 
                size={InfoCardSize} 
                stroke={infoCardStroke}/>
              }
              titulo='MARKETING Y PUBLICIDAD MUSICAL'
              texto={'Te asesoramos y ayudamos a: Distribuir tu musica en plataformas virtuales, que tu música llegue a miles de personas, alcanzar tus metas en redes sociales, generar ingresos con tu música, mucho más.'}

            />
                <InfoCard 
                  icon={
                  <IconVideo 
                    size={InfoCardSize} 
                    stroke={infoCardStroke}
                  />}
                  titulo='FOTOGRAFÍA Y PRODUCCIÓN AUDIOVISUAL'
                  texto='Contamos con equipos modernos que graban en 4K, luces, maquina de humo, estabilizadores, lentes, drone y un equipo de personas que trabajan con excelencia, además contamos con fotógrafos apasionados que te harán lucir como el artista que eres.'
      
                />
            
          </div>{/* cards */}
        </div>{/* info1 */}

        <div className='contenedor acerca-de-nosotros'>
          <SimpleText 
            titulo='Acerca de Nosotros' 
            texto={<p>Somos algo más que sólo un estudio de grabación en Costa Rica, no nos limitamos a hacer únicamente nuestro trabajo, queremos que en cada proyecto, cada canción lleve nuestro ADN, damos siempre lo mejor de nosotros y definitivamente hacer esto, es nuestra misión de vida.</p>} 
          />

          <PalabrasDelEquipo 
            titulo={'¡Hola!'}

            texto='Éste soy yo, Leo, soy el productor y fundador del estudio FLProductions. A través de los años me he dado cuenta que lo que hace diferente al estudio de todos los demás, definitivamente no es el hardware, ni las instalaciones, es el conocimiento que continuamente lo estoy actualizando y con mas de 15 años de experiencia siempre tratamos de emplearlo de la mejor manera en cada proyecto, cada canción se hace con amor, dandole la importancia que se merece y eso es lo que quiero que ustedes obtengan de mi. ¡Gracias por motivarme a ser mejor cada día, lo que siempre me hace dar lo mejor de mí!'
            nombre='Leo Serrano'
            puesto='Productor Musical'
            foto='https://flproductionscr.com/build_main/img/leo-serrano1.webp'
            firma='https://flproductionscr.com/build_main/img/leoserrano-signature.webp'
          />

        </div>{/* seccion 2 Acerca de Nosotros */}
        <div className='inicio__Caracteristicas'>
          <NuestrasCaracteristicas />       
        </div>
        <div>
          <Testimonio />
        </div>

        <h3 className="inicio__contact-form__title">Contáctenos</h3>
        <div className='inicio__contact-Form'>
          <svg className='pagelayer-svg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className='pagelayer-shape-fill' d="M1000,99v-99l-1000,0v99h0.1l333.8,-92.8l309.2,69.8l118.8,-16.6"></path>
          </svg>
          </svg>
          

            <FormulariodeContacto />
          

          <svg className='pagelayer-svg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" >
          <path className='pagelayer-shape-fill' d="M0,1v99h1000v-99h-0.1l-333.8,92.8l-309.2,-69.8l-118.8,16.6"></path>
          </svg>
          </svg>

        </div>
        
        
      </HelmetProvider>
    
    </>
  )

}