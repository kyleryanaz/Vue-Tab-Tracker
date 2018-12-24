<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <panel title="YouTube Video">
          <!-- youtube embeded -->
        </panel>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <panel title="Lyrics">
          <textarea
            readonly
            v-model="song.lyrics"
          ></textarea>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from './YouTube'
import SongService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    console.log(songId)
    this.song = (await SongService.show(songId)).data
    console.log(this.song)
  },
  components: {
    Panel,
    SongMetadata,
    YouTube
  }
}
</script>

<style scoped>

</style>
