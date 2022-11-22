<template>
  <client-only class=""
    ><date-picker
      class="form-control"
      placeholder="MM/DD/YYYY"
      format="MM/dd/yyyy"
      v-model="date_today"
      :disabled-dates="disabledDates"
      type="date"
  /></client-only>
</template>

<script>
export default {
  data() {
    return {
      date_today: new Date(),
      disabledDates: {
        to: new Date(), // Disable all dates after specific date
        days: [6, 0], // Disable Saturday's and Sunday's
      },
    };
  },
};
</script>

<style></style>
