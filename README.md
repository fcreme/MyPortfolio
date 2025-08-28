# Mi Portfolio - Desarrollador Web

Un portfolio moderno y responsive construido con React, diseñado para mostrar tus habilidades, proyectos y experiencia como desarrollador.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con gradientes y animaciones suaves
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Animaciones**: Transiciones fluidas con Framer Motion
- **Navegación Suave**: Scroll automático entre secciones
- **Formulario de Contacto**: Funcional con validación
- **Filtros de Proyectos**: Categorización por tipo de proyecto
- **Barras de Progreso**: Visualización animada de habilidades
- **Timeline**: Línea de tiempo para experiencia profesional
- **Iconos Modernos**: Lucide React para iconografía consistente

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconos modernos
- **CSS3** - Estilos personalizados y responsive design
- **HTML5** - Estructura semántica

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/mi-portfolio.git
   cd mi-portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 🎨 Personalización

### Información Personal

Edita los siguientes archivos para personalizar tu información:

#### `src/components/Hero.js`
```javascript
// Línea 8 - Cambia "Tu Nombre" por tu nombre real
<span className="highlight">Tu Nombre</span>

// Líneas 15-16 - Actualiza la descripción
Apasionado por crear experiencias digitales únicas y soluciones innovadoras. 
Especializado en React, Node.js y tecnologías modernas del desarrollo web.

// Líneas 20-30 - Actualiza los enlaces sociales
const socialLinks = [
  {
    icon: <Github size={20} />,
    url: 'https://github.com/tu-usuario', // Tu GitHub
    label: 'GitHub'
  },
  // ... más enlaces
];
```

#### `src/components/About.js`
```javascript
// Líneas 6-12 - Actualiza la información personal
const personalInfo = [
  { icon: <User size={20} />, label: 'Nombre', value: 'Tu Nombre Completo' },
  { icon: <MapPin size={20} />, label: 'Ubicación', value: 'Tu Ciudad, País' },
  { icon: <Calendar size={20} />, label: 'Experiencia', value: '3+ años' },
  { icon: <Mail size={20} />, label: 'Email', value: 'tu-email@ejemplo.com' },
  { icon: <Phone size={20} />, label: 'Teléfono', value: '+1 234 567 890' }
];

// Líneas 14-35 - Actualiza tu experiencia profesional
const experience = [
  {
    year: '2023 - Presente',
    title: 'Desarrollador Full Stack Senior',
    company: 'Empresa Actual',
    description: 'Liderando el desarrollo de aplicaciones web modernas con React y Node.js.'
  },
  // ... más experiencia
];
```

#### `src/components/Skills.js`
```javascript
// Líneas 6-60 - Personaliza tus habilidades y niveles
const skillCategories = [
  {
    icon: <Code size={24} />,
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      // ... más habilidades
    ]
  },
  // ... más categorías
];
```

#### `src/components/Projects.js`
```javascript
// Líneas 6-60 - Actualiza tus proyectos
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma completa de comercio electrónico...',
    image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=E-commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    liveUrl: 'https://ejemplo-ecommerce.com',
    githubUrl: 'https://github.com/tu-usuario/ecommerce',
    featured: true
  },
  // ... más proyectos
];
```

#### `src/components/Contact.js`
```javascript
// Líneas 25-35 - Actualiza información de contacto
const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    value: 'tu-email@ejemplo.com',
    link: 'mailto:tu-email@ejemplo.com'
  },
  // ... más información
];

// Líneas 37-50 - Actualiza enlaces sociales
const socialLinks = [
  {
    icon: <Github size={20} />,
    url: 'https://github.com/tu-usuario',
    label: 'GitHub'
  },
  // ... más enlaces
];
```

### Colores y Estilos

Los colores principales se pueden personalizar editando las variables CSS en los archivos de estilos:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Color de acento */
color: #ffd700;

/* Colores de texto */
color: #333; /* Texto principal */
color: #666; /* Texto secundario */
```

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Despliegue

### Netlify (Recomendado)
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `build`

### Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`

### GitHub Pages
1. Instala gh-pages: `npm install --save-dev gh-pages`
2. Añade al package.json:
   ```json
   "homepage": "https://tu-usuario.github.io/mi-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Ejecuta: `npm run deploy`

## 📄 Estructura del Proyecto

```
mi-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── *.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **Email**: tu-email@ejemplo.com
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **LinkedIn**: [Tu Nombre](https://linkedin.com/in/tu-usuario)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! 