<template>
    <v-container fluid class="fill-height background-graphic">
        <!-- LOGO -->
        <v-row class="justify-center">
            <v-col cols="9" class="px-8">
                <h3>help out your peers and</h3>
                <h2>give feedback</h2>
                <v-row no-gutters class="mt-10">
                    <span>review completed sessions</span>
                </v-row>
                <v-row no-gutters>
                    <v-card
                            v-for="i in 3" :key="i"
                            class="mr-10 mt-4"
                            height="110"
                            width="275"
                            ripple

                    >
                        <v-img alt="bounce" src="../assets/n.png" />
                    </v-card>
                </v-row>
                <v-row no-gutters>
                    <v-card
                            v-for="i in 3" :key="i"
                            class="mr-10 mt-10"
                            height="110"
                            width="275"
                            ripple

                    >
                        <v-img alt="bounce" src="../assets/n.png"/>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        methods: {
            remove (item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
            },
        },
    }
</script>

<style lang="scss">
</style>
