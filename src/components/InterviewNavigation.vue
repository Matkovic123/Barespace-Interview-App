<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <b-navbar>
    <template #start>
      <b-navbar-item>
        <div class="buttons">
          <a class="button">
            <RouterLink to="/">Question 1</RouterLink>
          </a>
          <a class="button">
            <RouterLink to="/">Question 2</RouterLink>
          </a>
          <a class="button">
            <RouterLink to="/">Question 3</RouterLink>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped></style>
