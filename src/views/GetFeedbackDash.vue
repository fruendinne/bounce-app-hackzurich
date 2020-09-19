<template>
    <v-container fluid class="fill-height background-graphic">
        <!-- LOGO -->
        <v-row class="justify-center">
            <v-col cols="9" class=" px-8">
                <h3>bounce your idea off someone else and</h3>
                <h2>get feedback</h2>
               <v-row no-gutters class="mt-10">
                   <span>start new session</span>
               </v-row>
                <v-row no-gutters>
                    <v-card class="mr-4 mt-4 mb-4 d-flex align-center justify-center"
                            height="150"
                            width="350"
                            v-ripple
                            outlined
                    >
                        <v-avatar color=transparent>
                            <v-icon size="150" color=secondary>mdi-plus</v-icon>
                        </v-avatar>
                    </v-card>
                </v-row>
                <v-row no-gutters>
                    <span>review completed sessions</span>
                </v-row>
                <v-row no-gutters>
                    <v-card
                            v-for="i in 3" :key="i"
                            class="mr-15 mt-4"
                            height="150"
                            width="350"
                            ripple
                            outlined
                    >
                        <v-img alt="bounce" src="../assets/n.png" />
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
