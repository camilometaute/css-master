<template>
  <section class="authkit-layout">
    <header class="authkit-layout__header">
      <div class="authkit-layout__logo-container">
        <img src="https://www.authkit.com/images/logo.svg" alt="AuthKit Logo" class="authkit-layout__logo">
      </div>
      <nav class="authkit-layout__nav">
        <ul class="authkit-layout__nav-list">
          <li class="authkit-layout__nav-item"><a href="#" class="authkit-layout__nav-link">Features</a></li>
          <li class="authkit-layout__nav-item"><a href="#" class="authkit-layout__nav-link">Pricing</a></li>
          <li class="authkit-layout__nav-item"><a href="#" class="authkit-layout__nav-link">Documentation</a></li>
          <li class="authkit-layout__nav-item"><a href="#" class="authkit-layout__nav-link">Login</a></li>
          <li class="authkit-layout__nav-item"><a href="#" class="authkit-layout__nav-link authkit-layout__nav-link--cta">Sign Up</a></li>
        </ul>
      </nav>
    </header>

    <main class="authkit-layout__main">
      <section class="authkit-layout__hero">
        <div class="authkit-layout__headline">
          <h1 class="authkit-layout__title">AuthKit</h1>
          <p class="authkit-layout__subtitle">The world's best login box, powered by WorkOS + Radix.</p>
        </div>
        <div class="authkit-layout__cards">
          <div class="authkit-layout__card authkit-layout__card--center">
            <div class="card_content__qyjch">
              <div class="hero__card-content">
                <div class="hero__card-header">
                  <img alt="SuperApp" src="https://www.authkit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoginCardLogo1.4c75d13c.png&w=64&q=75" width="32" height="32" />
                  <p class="text_text__diRzx text_text-normal__Srl6t text_text-bold__DMjUe text_text-align-center__cYXHS text_text-size-h5__a3s9K">Sign in to SuperApp</p>
                </div>
                <label class="text_text__diRzx text_text-normal__Srl6t text_text-bold__DMjUe text_text-size-p__25oFp">Email
                  <div style="margin-top:5px" class="input_wrapper__s8Qw7">
                    <input data-1p-ignore="true" class="input_input__8iWUF input_input-solid__kJlIe" autocomplete="off" type="email" placeholder="Your email address" name="email">
                  </div>
                </label>
                <button class="button_button__XtUFt button_button-outline__AsyrE">Continue</button>
                <div style="margin-block:10px">
                  <div class="between-lines_wrapper__QeHD9 between-lines_wrapper-solid__XGDPf">OR</div>
                </div>
                <button class="button_button__XtUFt button_button-outline__AsyrE">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M15.883 8.184c0-.544-.045-1.09-.139-1.626H8.198v3.08h4.322a3.703 3.703 0 0 1-1.6 2.432v1.999h2.58c1.513-1.394 2.383-3.451 2.383-5.885Z"></path>
                    <path fill="currentColor" d="M8.198 16c2.158 0 3.978-.708 5.303-1.931l-2.578-2c-.717.489-1.643.765-2.722.765-2.087 0-3.856-1.408-4.491-3.301H1.05v2.06A8.001 8.001 0 0 0 8.197 16Z"></path>
                    <path fill="currentColor" d="M3.707 9.533a4.792 4.792 0 0 1 0-3.063V4.41H1.049a8.007 8.007 0 0 0 0 7.184l2.658-2.061Z"></path>
                    <path fill="currentColor" d="M8.198 3.166a4.347 4.347 0 0 1 3.07 1.2L13.55 2.08A7.689 7.689 0 0 0 8.198.001 7.998 7.998 0 0 0 1.05 4.408L3.707 6.47c.632-1.896 2.404-3.304 4.491-3.304Z"></path>
                  </svg>
                  Continue with Google
                </button>
                <button class="button_button__XtUFt button_button-outline__AsyrE">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                    <path fill="currentColor" d="M.5 0h7.467v7.467H.5V0Z"></path>
                    <path fill="currentColor" d="M9.033 0H16.5v7.467H9.033V0Z"></path>
                    <path fill="currentColor" d="M9.033 8.533H16.5V16H9.033V8.533Z"></path>
                    <path fill="currentColor" d="M.5 8.533h7.467V16H.5V8.533Z"></path>
                  </svg>
                  Continue with Microsoft
                </button>
                <p class="text_text__diRzx text_text-muted__2odSz text_text-align-center__cYXHS text_text-size-p__25oFp">Don't have an account? <a class="link" href="#">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="authkit-layout__footer">
      <p class="authkit-layout__footer-text">© 2024 AuthKit. All rights reserved.</p>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'AuthkitLayout'
};
</script>
