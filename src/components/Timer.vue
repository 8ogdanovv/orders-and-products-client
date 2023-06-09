<template>
  <div class="timer">
    <div class="date">
      <div class="day-name">{{ dayName }}</div>

      <div class="time-span">
        <div class="date">{{ date }}</div>

        <div class="clock-icon"></div>

        <div class="locale-time">{{ localeTime }}</div>
      </div>

    </div>
  </div>
</template>

<script>
import { addZero, formatDate } from '../utils/helpers';

export default {
  name: 'Timer',
  data() {
    return {
      dayName: '',
      date: '',
      localeTime: ''
    };
  },
  mounted() {
    this.updateTimer();
    setInterval(this.updateTimer, 1000);
  },
  methods: {
    updateTimer() {
      const now = new Date();
      this.dayName = now.toLocaleDateString(undefined, { weekday: 'long' });
      this.date = formatDate(now);
      this.localeTime = addZero(now.getHours()) + ':' + addZero(now.getMinutes());
    }
  }
};
</script>

<style>
.timer {
  margin-left: auto;
}

.time-span {
  display: flex;
  gap: 0.25rem;
}

.date {
  font-size: 0.75rem;
  line-height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 0.5rem;
}

.day-name {
  font-weight: 600;
  opacity: 0.8;
  letter-spacing: 0.1em;
}

.clock-icon {
  width: 0.75rem;
  height: 0.75rem;
  background-image: url('../assets/clock-nine.svg');
  background-position: center;
  background-size: contain;
}

.locale-time {
  font-weight: 600;
  opacity: 0.75;
}
</style>