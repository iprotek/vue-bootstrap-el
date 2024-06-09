<template>
    <div> 
        <div class="col-md-12 mt-4"> 
            <h2 class="text-center"><b><i>SYSTEMS </i></b></h2>
            <div @click="newroute(item.url)" style="cursor:pointer;" :class="'mb-4 p-2 text-nowrap '+( item.id == selected ? 'app-selected': 'app-default')" v-for="(item, itemIndex) in projectList" v-bind:key="'app-item-'+item.id+'-'+itemIndex">
                <img style="max-width: 150px; max-height: 75px;" :src="item.default_image" />
                &nbsp;&nbsp;<b class="py-2"> <span v-text="item.name" style="font-size:20px;cursor:pointer;"></span> </b>
            </div>
        </div> 
    </div>
</template>

<script> 
    export default {
        props:[ "url", "selected" ],
        components: { 
        },
        data: function () {
            return { 
                projectList:[]
            }
        },
        methods: { 
            newroute:function(href){
                window.location.href = href;
            }
        },
        mounted:function(){
            var vm = this;
            WebRequest2('GET',  this.url).then(resp=>{
                resp.json().then(data=>{
                    //console.log("Projects",data);
                    vm.projectList = data;
                })
            })
        },
        updated:function(){

        }
    }
</script>
