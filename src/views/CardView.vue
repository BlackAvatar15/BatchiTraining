<template>
    <div class="team">
        <h1 class="subheading grey--text">TEAM</h1>

        <!--<v-card class="mx-auto"
        max-width="344">

    <v-card-text>
      <div>Word of the Day</div>

      <p class="text-h4 font-weight-black">el·ee·mos·y·nar·y</p>

      <p>adjective</p>

      <div class="text-medium-emphasis">
        relating to or dependent on charity; charitable; charitable donations. Pertaining to alms.<br>
        "an eleemosynary educational institution."
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="teal-accent-4"
        text="Learn More"
        variant="text"
        @click="reveal = true"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="position-absolute w-100"
        height="100%"
        style="bottom: 0;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4">Origin</p>

          <p class="text-medium-emphasis">
            late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-btn
            color="teal-accent-4"
            text="Close"
            variant="text"
            @click="reveal = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>-->

        <v-container class="my-1">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card color="grey" flat class="text-xs-center ma-3">

                        <v-responsive class="pt-4">
                            
                           
                                <v-avatar size="100" class="grey lighten-2">
                                    <img :src="person.avatar">
                                </v-avatar>
                           
                    
                              
                        </v-responsive>
                      
                            <v-card-text>
                                <div class="subheading">{{ person.name }}</div>
                                <div class="grey--text">{{ person.role }}</div>
                                <div>{{ person.about }}</div>
                            </v-card-text>
                        
                        <v-card-actions>
                            <v-btn flat color="white">
                                <v-icon small left>message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>
        <!--</v-card>-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'Ren', role: 'Front End', avatar: '/avatar-1.png', about: 'Studied BSIT at Cavite State University' },
                { name: 'Carlo', role: 'Back End', avatar: '/avatar-2.png', about: 'Studied BSIT at Cavite State University' },
                { name: 'Jayf', role: 'Back End', avatar: '/avatar-4.png', about: 'Studied BSIT at Cavite State University' },
                { name: 'Cath', role: 'Front End', avatar: '/avatar-3.png', about: 'Studied BSIT at Cavite State University' },
                { name: 'Mark', role: 'Back End', avatar: '/avatar-5.png', about: 'Studied BSIT at Cavite State University' },
                { name: 'Mark', role: 'Back End', avatar: '/avatar-1.png', about: 'Studied BSIT at Cavite State University' },
               

            ]
        }
    }
}

</script>



<style></style>