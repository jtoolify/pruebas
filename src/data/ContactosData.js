import IcoFacebook from '@/assets/contactos/icons8-facebook-48.png'
import IcoTwitter from '@/assets/contactos/icons8-twitterx-50.png'
import IcoInstagram from '@/assets/contactos/icons8-instagram-48.png'
import IcoCorreo from '@/assets/contactos/icons8-email-48.png'
import IcoTelefonos from '@/assets/contactos/icons8-featurephone-48.png'
import IcoOficinas from '@/assets/contactos/icons8-business-building-48.png'
import ImgUbicacion from '@/assets/contactos/ubicacion.png'

const ContactosData = {
  imgaenUbicacion: ImgUbicacion,
  contactData: [
    {
      title: 'Correos Electrónicos',
      icon: IcoCorreo,
      details: ['proveedor@factoryil.com', 'gps@factoryil.com'],
    },
    {
      title: 'Teléfonos',
      icon: IcoTelefonos,
      details: ['+57 322 613 7916', '+57 311 2605606'],
    },
    {
      title: 'Oficinas',
      icon: IcoOficinas,
      details: [
        'Barranquilla, Colombia - CALLE 65B#42-45',
        'Barrancabermeja, Colombia - Calle 52A #34c-60',
      ],
    },
  ],
  socialLinks: [
    { url: 'https://facebook.com', icon: IcoFacebook },
    { url: 'https://twitter.com', icon: IcoTwitter },
    { url: 'https://instagram.com', icon: IcoInstagram },
  ],
  formActionUrl :''
};

export default ContactosData;
