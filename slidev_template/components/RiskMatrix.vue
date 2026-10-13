<script setup lang="ts">
interface Cell {
  row: number
  col: number
  label?: string
  severity: 'low' | 'medium' | 'high' | 'critical'
}

withDefaults(defineProps<{
  cells: Cell[]
  rows?: number
  cols?: number
  rowLabels?: string[]
  colLabels?: string[]
}>(), {
  rows: 3,
  cols: 3,
  rowLabels: () => ['High', 'Medium', 'Low'],
  colLabels: () => ['Low', 'Medium', 'High'],
})

const severityColor: Record<string, string> = {
  low: 'rgba(45, 212, 191, 0.3)',
  medium: 'rgba(251, 191, 36, 0.35)',
  high: 'rgba(251, 146, 60, 0.4)',
  critical: 'rgba(248, 113, 113, 0.45)',
}
</script>

<template>
  <div class="risk-matrix">
    <div class="axis-label y-axis">Likelihood</div>
    <div class="matrix-grid" :style="{ gridTemplateColumns: `auto repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, auto) auto` }">
      <div v-for="(rl, ri) in rowLabels" :key="`r-${ri}`" class="row-label" :style="{ gridRow: ri + 1, gridColumn: 1 }">
        {{ rl }}
      </div>
      <div
        v-for="cell in cells"
        :key="`${cell.row}-${cell.col}`"
        v-click
        class="matrix-cell"
        :style="{
          gridRow: cell.row,
          gridColumn: cell.col + 1,
          backgroundColor: severityColor[cell.severity],
        }"
      >
        {{ cell.label }}
      </div>
      <div class="corner" :style="{ gridRow: rows + 1, gridColumn: 1 }" />
      <div v-for="(cl, ci) in colLabels" :key="`c-${ci}`" class="col-label" :style="{ gridRow: rows + 1, gridColumn: ci + 2 }">
        {{ cl }}
      </div>
    </div>
    <div class="axis-label x-axis">Impact</div>
  </div>
</template>

<style scoped>
.risk-matrix {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  gap: 0.5rem;
  max-width: 34rem;
  margin: 1rem auto;
}
.matrix-grid {
  display: grid;
  gap: 0.35rem;
  grid-column: 2;
  grid-row: 1;
}
.matrix-cell {
  border-radius: 0.4rem;
  min-height: 3.2rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  padding: 0.25rem;
}
.row-label, .col-label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  opacity: 0.75;
  padding: 0 0.4rem;
}
.axis-label {
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.y-axis {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  grid-row: 1;
  grid-column: 1;
  justify-self: center;
  align-self: center;
}
.x-axis {
  grid-row: 2;
  grid-column: 2;
  text-align: center;
  margin-top: 0.15rem;
}
</style>
