import {Injectable} from "@angular/core";
import {ScriptStore} from "./script.store";
import {StyleStore} from "./style.store";

declare var document: any;

@Injectable()
export class AssetsService {
  private scripts: any = {};
  private styles: any = {};

  constructor() {
      ScriptStore.forEach((script: any) => {
          this.scripts[script.name] = {
              loaded: false,
              src: script.src
          };
      });

      StyleStore.forEach((style: any) => {
        this.styles[style.name] = {
            loaded: false,
            href: style.href
        };
    });
  }

  loadAssets(type: string, assets: string[], componentTag: string = null){
    var promises: any[] = [];
    
    if(type === 'SCRIPTS')
        assets.forEach((asset) => {
            promises.push(this.loadScript(componentTag, asset));
        });
    
    if(type === 'STYLES')
        assets.forEach((asset) => {
            promises.push(this.loadStyle(asset));
        });
    
    return Promise.all(promises);
  }

  loadScript(componentTag: string = null, name: string) {
    return new Promise((resolve, reject) => {
        if (this.scripts[name].loaded) 
            resolve({script: name, loaded: true, status: 'Already Loaded'});
        else {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.scripts[name].src;
            script.async = false;
            if (script.readyState) {  //IE
                script.onreadystatechange = () => {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null;
                        this.scripts[name].loaded = true;
                        resolve({script: name, loaded: true, status: 'Loaded'});
                    }
                };
            } else {  
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                };
            }
            script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
            if(componentTag)
                document.getElementsByTagName(componentTag)[0].appendChild(script);
            else
                document.getElementsByTagName('body')[0].appendChild(script);
        }
    });
  }

  loadStyle(name: string) {
    return new Promise((resolve, reject) => {
        if (this.styles[name].loaded) 
            resolve ({style: name, loaded: true, status: 'Already Loaded'});
        else {
            let style = document.createElement('link');
            style.rel = "stylesheet";
            style.type = "text/css";
            style.href = this.styles[name].href;
            if (style.readyState) {  //IE
                style.onreadystatechange = () => {
                    if (style.readyState === "loaded" || style.readyState === "complete") {
                        style.onreadystatechange = null;
                        this.styles[name].loaded = true;
                        resolve({style: name, loaded: true, status: 'Loaded'});
                    }
                };
            } else {  
                style.onload = () => {
                    this.styles[name].loaded = true;
                    resolve({style: name, loaded: true, status: 'Loaded'});
                };
            }
            style.onerror = (error: any) => resolve({style: name, loaded: false, status: 'Loaded'});
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    });
  }
}