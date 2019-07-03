<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">

    <router-link
      v-for="item in links"
      :key="item.url"
      active-class="active"
      tag="li"
      :to="item.url"
      :exact="item.exact"
    >
        <a href="#" class="waves-effect waves-orange pointer">{{ item.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      { title: 'Счет', url: '/detail', exact: true },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      // { title: 'Новая запись', url: '/record' },
      { title: 'Категории', url: '/categories' }
    ]
  })
}
</script>
