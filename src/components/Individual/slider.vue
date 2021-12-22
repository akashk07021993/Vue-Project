<template>
<div>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="(card) in cards" :key="card">
          <img v-bind:src="card.image"/>
      </div>
    </div>
  </div>
  <a class="prev" @click="prev" href="#">&#10094; Previous</a>
  <a class="next" @click="next" href="#">&#10095; Next</a>
</div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
          {image:'https://static-cse.canva.com/blob/142530/Pink-and-Black-Grunge-Creative-Wattpad-Book-Cover.jpg'},
          {image:'https://i.pinimg.com/736x/d9/7c/51/d97c518471a161c6badd53b365ca55d6.jpg'},
          {image:'https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg'},
          {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4yGwkz128dpVHBztwERbm6Z6kIXwQ03V0A&usqp=CAU'},
          {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBlyst7h-h8rVXr0BuH6schpdLqoGRA8RqA&usqp=CAU'},
          {image:'https://pub-static.fotor.com/assets/projects/pages/f9440db0-93f8-11e9-bd39-fddb51343e46_2531d93a-4d1f-4df1-897a-67cfb79f4b46_thumb.jpg'},
          {image:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sad-romance-kindle-book-cover-flyer-template-539b5fdf2dd2f6602c25ce81fbb5d877_screen.jpg?ts=1636978269'},
          {image:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457'},
          {image:'https://m.media-amazon.com/images/I/51FzJzSepFL.jpg'},
          {image:'https://pub-static.fotor.com/assets/projects/pages/409df710-9bde-11e9-9f79-31bc73e3f328_e45f364a-ebce-4a3a-9f19-07fe6645ecf1_thumb.jpg'},
          {image:'https://static-cse.canva.com/blob/142570/Man-Silhouette-Thriller_Mystery-Book-Cover.jpg'},
          
      ],
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  mounted () {
    this.setStep()
    this.resetTranslate()
  },
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px`
    },
    next () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },
    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },
    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }
}
</script>

<style>
.carousel {
  width: 100%;
  height: 600px;
  overflow: hidden;
}
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
img {
  clip-path: url(#svgClip);
	width: 18em;
	height: 18em;
	object-fit: cover;
	display: block;
}

.card {
  width: 230px;
  margin-right: 10px;
  display: inline-flex;
  /* optional */
  height: 290px;
  color: white;
  border-radius: 4px;
  align-items: center;
  margin: 215px 130px 0 130px;
  justify-content: center;
}
/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: grey;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
  margin: 135px 0 0 0;
}

.prev {
  left: 0;
  margin: 135px 0 0 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

</style>