<template>
    <div>
        <p>Copyright &copy; {{ cDate }} by Kamvelihle Sikalana</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cDate: new Date().getFullYear()
            }
        }
        
    }
</script>

<style scoped>

</style>