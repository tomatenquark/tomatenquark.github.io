<template>
  <div class="st_container" :class="dark ? 'st_dark' : ''">
    <span v-if="title" class="st_title">{{ title }}</span>
    <ul class="st_list">
      <li
        class="st_server"
        v-for="server in processedServers"
        :key="`${server.host}:${server.port}`"
      >
        <div class="st_server__start">
          <div class="st_server__title">
            <img
              class="st_server__flag"
              :src="`${flagBaseUrl}${server.country}.png`"
              :alt="`Flag of ${server.countryName}`"
            />
            <span class="st_server__description">{{ server.description }}</span>
          </div>
          <ul class="st_server__details">
            <li class="st_server__detail">{{ server.gameMode }}</li>
            <li class="st_server__detail">{{ server.mapName }}</li>
            <li class="st_server__detail">{{ server.timeLeftString }}</li>
            <li class="st_server__detail">
              {{ server.clients }}/{{ server.maxClients }}
            </li>
          </ul>
        </div>
        <div class="st_server__end">
          <span class="st_server__address"
            >{{ server.host }}:{{ server.port }}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ServerList",
  props: {
    title: { type: String, default: null },
    apiUrl: { type: String, default: "https://tracker.tomatenquark.org/api/servers/" },
    flagBaseUrl: {
      type: String,
      default: "https://www.sauertracker.net/images/flags/"
    },
    dark: { type: Boolean, default: false },
    showEmpty: { type: Boolean, default: true }
  },
  data: () => ({
    servers: [],
    updateInterval: null,
    error: null
  }),
  computed: {
    processedServers() {
      const filteredServers = this.showEmpty
        ? this.servers
        : this.servers.filter(server => server.clients > 0);
      const sortedServers = filteredServers
        .slice()
        .sort((a, b) => b.clients - a.clients);
      return sortedServers;
    }
  },
  mounted() {
    this.updateServerList();
    this.updateInterval = setInterval(this.updateServerList, 5000);
  },
  methods: {
    updateServerList() {
      fetch(this.apiUrl)
        .then(response => response.json())
        .then(data => {
          this.servers = data;
          this.error = null;
        })
        .catch(e => (this.error = e));
    }
  }
};
</script>

<style scoped>
.st_container {
  max-width: 500px;
  width: 100%;
  padding: auto;
}

.st_title {
  display: block;
  text-align: center;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.st_dark .st_title {
  color: #eee;
}

.st_list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.st_server {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.5rem 0.8rem;
  background-color: #f7f7f7;
  border-radius: 10px;
  color: #333;
}

.st_dark .st_server {
  background-color: #2d3748;
  color: #eee;
}

.st_server__title {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.st_server__flag {
  margin-right: 10px;
}

.st_server__description {
  font-weight: 600;
}

.st_server__details {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.st_server__detail {
  padding-right: 5px;
  margin-right: 5px;
  border-right: solid 2px #d0d0d0;
}

.st_dark .st_server__detail {
  border-right: solid 2px #4a5568;
}

.st_server__detail:last-child {
  padding-right: 0;
  margin-right: 0;
  border-right: none;
}

.st_server__address {
  color: #555;
}

.st_dark .st_server__address {
  color: #ccc;
}
</style>
