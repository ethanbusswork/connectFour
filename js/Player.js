class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    createTokens(num) {

      let tokenArray = [];

      for(let i = 0; i < num; i++) {
        let token = new Token(i, this);
        tokenArray.push(token);
      }

      return tokenArray;
    }

    get unusedTokens() {
      let unusedTokens = [];

      for(let token of this.tokens) {
        if(token.dropped == false) {
          unusedTokens.push(token);
        }
      }

      return unusedTokens;
    }

    get activeToken() {
      return this.unusedTokens[0];
    }

    checkTokens() {
      return this.unusedTokens.length == 0 ? false : true;
    }
}
