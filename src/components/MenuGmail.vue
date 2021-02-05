<template>
  <section class="menu-gmail">
    <img class="menu-gmail__photo" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" alt="">
    <h3>Lauren Jhonson Helderson</h3>
    <p>lauren@gmail.com</p>
    <button class="menu-gmail__gestion">Gestionar tu cuenta de google</button>
    <button class="menu-gmail__other-account"><font-awesome-icon icon="user-plus" />Añadir otra cuenta</button>
    <div class="menu-gmail__log-out">
      <button>Cerrar sesión</button>
    </div>
    <div class="menu-gmail__footer">
      <a href="#" >Política de privacidad</a>
      •
      <a href="#" >Términos y condiciones</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuGmail',
};
</script>
