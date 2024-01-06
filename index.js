require('../bootstrap');

if(!window.Vue)
    window.Vue = require('vue').default;

if(!window.Vue)
    return;

    //Suggestion 
    Vue.component('accordion', require('./common/Accordion.vue').default);  
    Vue.component('app-user-login-check', require('./common/AppUserLoginCheck.vue').default); 
    Vue.component('app-user-passwor-swal-check', require('./common/AppUserPasswordSwalCheck.vue').default); 
    Vue.component('bootstrap-switch', require('./common/BoostrapSwitch.vue').default); 
    Vue.component('bootstrap-switch2', require('./common/BoostrapSwitch2.vue').default); 
    Vue.component('button-copy', require('./common/ButtonCopy.vue').default); 
    Vue.component('calendar-view', require('./common/CalendarView.vue').default); 
    Vue.component('category-list-form', require('./common/CategoryListForm.vue').default); 
    Vue.component('color-picker', require('./common/ColorPicker.vue').default); 
    Vue.component('datatable', require('./common/DataTable.vue').default);  
    Vue.component('datatable2', require('./common/datatable2.vue').default);  
    Vue.component('datatable3', require('./common/DataTable3.vue').default);  
    Vue.component('file-uploads', require('./common/FileUploads.vue').default);  
    Vue.component('icheck', require('./common/iCheck.vue').default);  
    Vue.component('iframe-view', require('./common/iFrameView.vue').default);  
    Vue.component('login-prompt', require('./common/LoginPrompt.vue').default);  
    Vue.component('modal-view', require('./common/Modal.vue').default);  
    Vue.component('order-fields', require('./common/OrderFields.vue').default);  
    Vue.component('page-footer', require('./common/PageFooter.vue').default);  
    Vue.component('preview-data-image', require('./common/PreviewDataImage.vue').default);  
    Vue.component('preview-image', require('./common/PreviewImage.vue').default);  
    Vue.component('register-prompt', require('./common/RegisterPrompt.vue').default);  
    Vue.component('search-bar-group', require('./common/SearchBarGroup.vue').default);  
    Vue.component('select2', require('./common/Select2.vue').default);  
    Vue.component('star-rating', require('./common/StarRating.vue').default);  
    Vue.component('summernote', require('./common/Summernote.vue').default);
    Vue.component('swal', require('./common/Swal.vue').default);  
    Vue.component('swal-input', require('./common/SwalInput.vue').default);  
    Vue.component('user-input', require('./common/UserInput.vue').default);  
    Vue.component('user-input2', require('./common/UserInput2.vue').default);  
    Vue.component('validation', require('./common/Validation.vue').default);  



 