<script setup lang="ts">
</script>
<template>
<v-container>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-row no-gutters>
          <v-col cols="12" class="text-center"> Primer año </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-row no-gutters>
        <v-col>
          <RouterLink :to="'/seccion'">
            <v-expansion-panel-text>
              <v-card width="300">
                <v-card-item>
                  <v-card-title>Sección A</v-card-title>
                  <v-card-subtitle>30 alumnos</v-card-subtitle>
                </v-card-item>
                <v-card-text> Semanero: Angel Moreno </v-card-text>
              </v-card>
            </v-expansion-panel-text>

          </RouterLink>
        </v-col>
        <v-col>
          <v-expansion-panel-text>
            <v-card width="300">
              <v-card-item>
                <v-card-title>Sección B</v-card-title>
                <v-card-subtitle>28 alumnos</v-card-subtitle>
              </v-card-item>
              <v-card-text> Semanero: Ana Godoy </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-col>
        <v-col>
          <v-expansion-panel-text>
            <v-card width="300">
              <v-card-item>
                <v-card-title>Sección C</v-card-title>
                <v-card-subtitle>31 alumnos</v-card-subtitle>
              </v-card-item>
              <v-card-text> Semanero: Luis Hernandez </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-col>
        <v-col>
          <v-expansion-panel-text>
            <v-card width="300">
              <v-card-item>
                <v-card-title>Sección D</v-card-title>
                <v-card-subtitle>29 alumnos</v-card-subtitle>
              </v-card-item>
              <v-card-text> Semanero: Luisa Moron </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-col>
      </v-row>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-row no-gutters>
          <v-col cols="12" class="text-center"> Segundo año </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-row no-gutters>
        <v-col>
          <v-expansion-panel-text>
            <v-card width="300">
              <v-card-item>
                <v-card-title>Sección A</v-card-title>
                <v-card-subtitle>30 alumnos</v-card-subtitle>
              </v-card-item>
              <v-card-text> Semanero: Angel Moreno </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-col>
        <v-col>
          <v-expansion-panel-text>
            <v-card width="300">
              <v-card-item>
                <v-card-title>Sección B</v-card-title>
                <v-card-subtitle>28 alumnos</v-card-subtitle>
              </v-card-item>
              <v-card-text> Semanero: Ana Godoy </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-col>
        <v-col>
          <v-expansion-panel-text>
            <v-card width="300">
              <v-card-item>
                <v-card-title>Sección C</v-card-title>
                <v-card-subtitle>31 alumnos</v-card-subtitle>
              </v-card-item>
              <v-card-text> Semanero: Luis Hernandez </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-col>
        <v-col>
          <v-expansion-panel-text>
            <v-card width="300">
              <v-card-item>
                <v-card-title>Sección D</v-card-title>
                <v-card-subtitle>29 alumnos</v-card-subtitle>
              </v-card-item>
              <v-card-text> Semanero: Luisa Moron </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-col>
      </v-row>
    </v-expansion-panel>
  </v-expansion-panels>
</v-container>
</template>
