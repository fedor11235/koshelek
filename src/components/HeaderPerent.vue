<template>
    <div class="nav">
        <a href="#">Block 1</a>
        <a href="#">Block 2</a>
    </div>
</template>

<script scoped>
export default {
  name: 'HeaderPerent',
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a{
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>
