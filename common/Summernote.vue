<template>
    <div> 
        <div :id="summernoteId"></div>
    </div>
</template>

<script>
    export default {
        props:[ "value", "height", "placeholder" ],
        components: { 
        },
        data: function () {
            return {    
                summernoteId: 'summernote-'+this._uid,
                content : ''
            }
        },
        watch: {
            value(newValue) {
                var vm = this;
                if(vm.content != newValue){
                    vm.content = newValue; 
                    $('#'+vm.summernoteId).summernote('code', newValue );
                }
            },
        },
        methods: { 


        },
        mounted:function(){     
            var vm = this; 
            setTimeout(function(){
                var height = 200;
                if(vm.height){
                    height = vm.height
                }

                $('#'+vm.summernoteId).summernote( { 
                    placeholder: vm.placeholder ? vm.placeholder : '',
                    height: height,
                    callbacks: {
                        onChange: function(contents, $editable) {
                            vm.content = contents;
                            vm.$emit("input", contents);
                            //document.querySelector('#intro').value = contents;
                        }
                    } 
                });
                if(vm.value){
                    vm.content = vm.value;
                    $('#'+vm.summernoteId).summernote('code', vm.content);
                }

                setTimeout(function(){
                    document.querySelector('.note-icon-question').closest('button').remove();
                    //document.querySelector('.note-icon-picture').closest('button').remove();
                    //document.querySelector('.note-icon-video').closest('button').remove();
                    //document.querySelector('.note-icon-link').closest('button').remove();
                }, 300);
            }, 100);
        },
        updated:function(){

        }
    }
</script>
