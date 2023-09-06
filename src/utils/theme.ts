export function updateTheme(mode:string){
   // 在html节点上添加属性：data-theme="dark" class 添加属性dark，
   // 反之则删除

   let root = document.querySelector('html');
   if (mode === 'DARK') {
    (root as HTMLElement).setAttribute('data-theme', 'dark');
    (root as HTMLElement).classList.add('drak')
   }else {
    (root as HTMLElement).setAttribute('data-theme', 'light');
    (root as HTMLElement).classList.remove('drak')
   }
}