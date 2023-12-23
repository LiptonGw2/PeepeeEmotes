<script>
export default {
    props: ["dick"],
    data() {
        return {}
    }
}
</script>

<template>
    <div class="dick">
        <div class="dickImgContainer">
            <img :src="dick.path" width="128" v-bind:title="dick.createdBy">
        </div>
        <div class="name" v-bind:class="{
            'v-long-name': dick.name.length >= 20,
            'long-name': dick.name.length > 15 && dick.name.length < 20
        }">
            {{ dick.name }}
        </div>
    </div>
</template>