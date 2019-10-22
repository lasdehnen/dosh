<template>
    <v-layout>
        <Page></Page>
    </v-layout>
</template>

<script>
    const Page = () => import("~/components/page")

    export default {
        components: {
            Page
        }
    }
</script>
