(() => {
  const reasons = [
    'Porque tu alegría también es la mía: verte feliz me hace feliz.',
    'Porque tus logros me emocionan y quiero celebrar cada paso contigo.',
    'Porque compartir mi tiempo contigo significa muchísimo para mí.',
    'Porque incluso en un día triste, quiero estar cerca y escucharte.',
    'Porque pensar en tus sueños me da ganas de acompañarte a cumplirlos.',
    'Porque eres una parte muy importante de mi vida, Valentina.',
    'Porque quiero seguir construyendo recuerdos contigo, uno a uno.',
    'Porque lo que siento por ti me inspira a cuidar mejor lo nuestro.',
    'Porque tu sonrisa es una de las cosas que más me gusta ver.',
    'Porque contigo quiero compartir tanto las buenas noticias como los días difíciles.',
    'Porque me importa cómo estás, incluso cuando no sabes cómo explicarlo.',
    'Porque entre tantas cosas que puedo hacer con mi tiempo, estar contigo es de mis favoritas.',
    'Porque me hace ilusión pensar en la próxima vez que te vea.',
    'Porque quiero conocer tus sueños, incluso esos que todavía no le cuentas a nadie.',
    'Porque un momento sencillo contigo puede convertirse en un recuerdo muy bonito.',
    'Porque tus pequeñas victorias también merecen una celebración enorme.',
    'Porque quiero escuchar lo que tienes que decir, sin mirar el reloj.',
    'Porque me importa tu tranquilidad tanto como tu sonrisa.',
    'Porque quiero que te sientas querida también en los días en que dudas de ti.',
    'Porque mirar nuestras fotos me recuerda cuánto valoro tenerte cerca.',
    'Porque hay canciones que me dan ganas de compartir contigo.',
    'Porque me ilusiona descubrir más cosas de ti con el tiempo.',
    'Porque no necesitas tener un día perfecto para que quiera estar a tu lado.',
    'Porque quiero ser parte de tus alegrías, aunque sea aplaudiéndote desde lejos.',
    'Porque me dan ganas de encontrar pequeños detalles que te hagan sonreír.',
    'Porque tu compañía es algo que extraño y valoro muchísimo.',
    'Porque quiero preguntarte cómo estuvo tu día y escuchar de verdad la respuesta.',
    'Porque tus sentimientos me importan, incluso cuando son distintos a los míos.',
    'Porque quiero aprender a quererte de la manera en que te haga bien.',
    'Porque me ilusiona compartir contigo una tarde sin planes y sin prisa.',
    'Porque quiero estar presente cuando algo que parecía difícil por fin te salga bien.',
    'Porque me nace guardarte un lugar en las cosas bonitas que me pasan.',
    'Porque quiero darte un abrazo cuando las palabras no sean suficientes.',
    'Porque lo cotidiano se vuelve especial cuando puedo compartirlo contigo.',
    'Porque quiero recordarte lo importante que eres, también en un día cualquiera.',
    'Porque me importan esos detalles de tu vida que quizá para otros pasan desapercibidos.',
    'Porque pensar en un nuevo recuerdo contigo me hace sonreír.',
    'Porque quiero acompañarte sin quitarte el espacio que necesites.',
    'Porque me alegra imaginarte orgullosa de todo lo que vas consiguiendo.',
    'Porque quiero que mis acciones te hagan sentir el cariño que te tengo.',
    'Porque me gustaría compartir contigo más paseos, más conversaciones y más risas.',
    'Porque mereces ternura incluso cuando el día no ha sido amable contigo.',
    'Porque quiero escucharte hablar de eso que te emociona tanto.',
    'Porque tu felicidad es algo que deseo de corazón.',
    'Porque me ilusiona seguir descubriendo nuestras pequeñas formas de hacernos felices.',
    'Porque quiero cuidar los momentos que tenemos, sin darlos por sentados.',
    'Porque me nace decirte algo bonito sin esperar una fecha especial.',
    'Porque quiero verte crecer y alegrarme contigo por la persona que quieres ser.',
    'Porque tenerte en mi vida significa más de lo que a veces sé decir.',
    'Porque eres tú, Valentina, y el cariño que siento por ti está en cada una de estas palabras.'
  ];
  const heart = document.getElementById('reason-heart');
  const message = document.getElementById('reason-message');
  const text = document.getElementById('reason-text');
  let index = 0;
  let heartAnimation, messageAnimation;
  heart.addEventListener('click', () => {
    text.textContent = reasons[index];
    index = (index + 1) % reasons.length;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    heartAnimation?.cancel();
    messageAnimation?.cancel();
    heartAnimation = heart.animate([{transform:'scale(1)'},{transform:'scale(1.15)'},{transform:'scale(.96)'},{transform:'scale(1)'}],{duration:480,easing:'ease-out'});
    messageAnimation = message.animate([{opacity:.2,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:400,easing:'ease-out'});
  });
})();
