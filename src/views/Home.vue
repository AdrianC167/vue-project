<template>
    <div class="home">
        <h1>Home</h1>
    </div>
    <v-divider :thickness="4"></v-divider>
    <p id="first">NetworkCalc provides a comprehensive suite of online tools and APIs for building, managing, and monitoring networks. Our easy-to-use platform includes powerful features like subnet calculation, domain monitoring, and network management. With built-in capabilities for integration into your own applications or use with our streamlined web interface, NetworkCalc is the ultimate tool for network engineers, administrators, students, and enthusiasts.</p>
    <v-divider :thickness="2"></v-divider>
    <p id="second">You can use your favorite command-line tools or programming languages to use with NetworkCalc like: </p>
<p class="third">• Bash</p>
<p class="third">• PowerShell</p>
<p class="third">• Command Prompt</p>
<p class="third">• Terminal</p>
<p class="third">• Python</p>
<p class="third">• JavaScript</p>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lemonada:wght@300&display=swap');

.home {
    font-family: 'Merienda', cursive;
    text-align: center;

}

#first {
    font-family: 'Lemonada', cursive;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 35px;
    padding-bottom: 30px;
}

#second{ 
    font-family: 'Lemonada', cursive;
    padding-bottom: 10px;
    padding-left: 10px;

}

.third{ 
    font-family: 'Lemonada', cursive;


}
</style>