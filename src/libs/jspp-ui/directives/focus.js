export default {
  mounted (el) {
    const oSelectorInput = el.querySelector('.selector-input');
    const oSelectorMenu = el.querySelector('.selector-menu');

    const  oPlcaeholder = oSelectorInput.querySelector('.placeholder'),
           oInput = oSelectorInput.querySelector('.input'),
           oIcon = oSelectorInput.querySelector('.iconfont');
    
    oInput.addEventListener('focus', function (e) {
      oPlcaeholder.style.display = 'none';
      oIcon.className = 'iconfont icon-search';
      
      setTimeout(() => {
        oSelectorMenu.style.display = 'block';
      }, 200)
    }, false);

    oInput.addEventListener('blur', function (e) {
   
      oIcon.className = 'iconfont icon-arrow-down';

      setTimeout(() => {
        oSelectorMenu.style.display = 'none';
        if (this.value.length === 0) {
          oPlcaeholder.style.display = 'block'; 
        }
      }, 200)
    }, false);

   
  }
}