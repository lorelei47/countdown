<template>
    <div class="clock">
        <div class="hour">
            <div class="hh" id="hh"></div>
        </div>
        <div class="min">
            <div class="mm" id="mm"></div>
        </div>
        <div class="sce">
            <div class="ss" id="ss"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Clock',
    prop: {},
    data(){

    }
}
</script>
<style>
.clock{
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #091921;
    border-radius: 50%;
    box-shadow: 0 -1rem 1rem rgba(255,255,255,0.05),
                inset 0 -1rem 1rem rgba(255,255,255,0.05),
                0 -1rem 1rem rgba(0,0,0,0.3),
                inset 0 -1rem 1rem rgba(0,0,0,0.3);
}
.clock:before{
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    background: #fff;
    border-radius: 50%;
    z-index: 1000;
}
</style>