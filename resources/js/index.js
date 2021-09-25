var typed = new Typed("#welcome-msg", {
  stringsElement: "#welcome-typed-strings",
  loop: false,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  onComplete: function (self) {
    element = self.el;
  },
});
