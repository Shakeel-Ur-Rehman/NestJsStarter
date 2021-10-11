export function Layout(body) {
  return `<body style="margin:0px 30%">
      <div style="box-shadow: 1px 1px 9px 2px lightgrey;">
        <header>
          <img src=\"cid:id1\" style="height:50px;float:left;margin-right:20px;margin-top:-10px" />
         <h1 style="color:black">Project  Name</h1>
         <div style="border-bottom:7px solid gray;opacity:0.1"></div>
        </header>
            ${body}
          <footer style="height:100px">
            <div>
                <p>copyrights @ProjectNameInc 2021</p>
            </div>
          </footer>
        </div>
        </body>`;
}
