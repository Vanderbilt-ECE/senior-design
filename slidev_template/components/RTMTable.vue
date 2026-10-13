<script setup lang="ts">
interface RTMRow {
  id: string
  description: string
  method: string
  status: 'pass' | 'fail' | 'pending' | 'in-progress' | 'blocked'
}

withDefaults(defineProps<{
  rows: RTMRow[]
}>(), {})

const statusMeta: Record<string, { label: string; color: string }> = {
  pass: { label: 'Pass', color: '#2dd4bf' },
  fail: { label: 'Fail', color: '#f87171' },
  pending: { label: 'Pending', color: 'rgba(255,255,255,0.5)' },
  'in-progress': { label: 'In Progress', color: '#fbbf24' },
  blocked: { label: 'Blocked', color: '#fb923c' },
}
</script>

<template>
  <div class="rtm-table">
    <table>
      <thead>
        <tr>
          <th class="col-id">Req ID</th>
          <th class="col-desc">Description</th>
          <th class="col-method">Verification</th>
          <th class="col-status">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="r.id" v-click="i + 1">
          <td class="col-id"><code>{{ r.id }}</code></td>
          <td class="col-desc">{{ r.description }}</td>
          <td class="col-method">{{ r.method }}</td>
          <td class="col-status">
            <span class="status-pill" :style="{ borderColor: statusMeta[r.status].color, color: statusMeta[r.status].color }">
              {{ statusMeta[r.status].label }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.rtm-table {
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.06);
  margin-top: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
}
thead th {
  background: rgba(255, 255, 255, 0.08);
  text-align: left;
  padding: 0.5rem 0.75rem;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.75;
}
tbody td {
  padding: 0.5rem 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  vertical-align: top;
}
.col-id { width: 14%; white-space: nowrap; }
.col-method { width: 20%; }
.col-status { width: 16%; }
.status-pill {
  display: inline-block;
  border: 1.5px solid;
  border-radius: 9999px;
  padding: 0.1rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 700;
}
</style>
