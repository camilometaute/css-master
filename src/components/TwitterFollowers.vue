<template>
  <section class="twitter-followers">
    <div class="twitter-followers__container">
      <h1>A quién seguir</h1>
      <ul>
        <li class="list">
          <img src="https://pbs.twimg.com/profile_images/1108554736398004224/Za8pS-nr_x96.png" alt="">
          <div class="list__body">
            <h5>Alibaba Cloud</h5>
            <span>@alibaba_cloud</span>
          </div>
          <button type="button" name="button">Seguir</button>
        </li>
        <li class="list">
          <img src="https://pbs.twimg.com/profile_images/1265569885729546241/UDoNkkFd_x96.jpg" alt="">
          <div class="list__body">
            <h5>Erase un Collage</h5>
            <span>@erase_un_collage</span>
          </div>
          <button type="button" name="button">Seguir</button>
        </li>
        <li class="list">
          <img src="https://pbs.twimg.com/profile_images/1455998534247985156/6a_Z9hBm_x96.jpg" alt="">
          <div class="list__body">
            <h5>Sistema de Bibliotecas</h5>
            <span>@sistema_bibliotecas</span>
          </div>
          <button type="button" name="button">Seguir</button>
        </li>
        <button class="twitter-followers__container__show-more">Mostrar más</button>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TruliaCards'
};
</script>
