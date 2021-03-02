# Pushdown Automata App

### How to Run
- clone the repo: `git clone https://github.com/ntrappe/vanilla_pda.git`
- create a local branch: `git branch new_branch`
- switch to local branch: `git checkout new_branch`
- push your local changes to the repo: `git add .` => `git commit -m "message"` => `git push origin new_branch`
  - check that your changes passed the Linter and Jest/Cypress tests in **[Actions](https://github.com/ntrappe/vanilla_pda/actions)**
- to merge into `main` you must first set up a **[pull request](https://github.com/ntrappe/vanilla_pda/pulls)**
  - click **`New pull request`** then select your branch to merge into main
  - assign the PR to a reviewer (e.g. ntrappe), set the label to **`PR: Needs review`**
  - once reviwed, that reviewer can either approve the request by setting the label to **`PR: Ready to Merge`** or they can leave comments and deny the PR temporarliy by setting the label to **`PR: Reviewed w/ Comments`**

### Resources:
- Style Linter: [stylelint.io](https://stylelint.io/demo#N4Igxg9gJgpiBcIAWMCGsBOACYAdAdlllAJYDOADgDaoCe8WAZlTAB4DcBRzbAtKRhhgALiQj4GGCAHdOhLACsArmVGNavSPmExtDSqjAxeAIxjDpMXXKIV0pfAHMGARgBsFDgQC+BAgFtUEkI8eVJKGnomFi95ZVUSdU1xHT0sI20YDDlffAJGCAgdbFCicOo6Bh5Yoni1DS1U4SqY3l0oGyw7KAdnLHdPHIIQABoQMlptVFYEcDIyUfBxRhJHWdKsXBAMJRYyLYYNoi3UYV4dll58CF4lfABra+k8hCxhHZgRriJNkBMqCBge5XG4wfwUYS0A5vD5feTHJYAjAg3jBABuqCoJCgvBQrGh7yUn2+CMg-n8ujO1za4MhBNhJN+sDANAwpzE+FMAKBKKgSmoJDAp2MFCkFCyohg+1eAG1GURCcT4T8jj8EatroJoXLlWrSeIyEIlKI0cY+QKhToyLxpCRhEh+IlGFlKbwMVQidL5T8ALre3Jqn1wtVbZms9niLmA4HUshICAYe2ofA40UQcWJjQQU0YDDYqX0onBn5bAraXiMVD+EhUDTU81Yy3GfBVguvRXFhFls6V6u1lHV+bBRy8Ry6LKCitVmsae4wWjSBNQQtKkMgRh3EQczSYsAo9GY7Erzu-Df4LeRoVUPfUu4GIw49NZU4J4+M0ub0SRrH4NDIxxsqQrrUtc+CqMmUCoBgOICEIX4vAwHbviAc60IwbIUvwQjhvB+7ggmwjJsIb7KlsFKkKgFZoMISiCFcrYoncjwyAhMJFsh9ZShkvS8JQQiJIKdpQu2DKkSA9b8o2wq8KcqL4Ym5y7G2iGiWuEkWtJhosCICbSip7FidSYIQhoZAQLRRgkWpoKsO8lGGtWkAAmBVkluJNwHliMHmf8xhkDQcbJOSlJ6Wxq5uWmGaQoxDxPKxSFiVpcEJrwFCGkoUA3CyqDzDFzHPK5CJJTpyJpTAGWgiwFLlresUsYVvzFcIKWQuKeVxQ1WyqHmTgor+0g-jAnUgHcdrtfVIkGWuskXMYxnRYNpgwAUWqyt6JxUNIdDSieRCqmubBGBC2remu-zRns1qoIwxS8QxLaYedQKXVsu16qWJAYKoVxSjoy4gKdWBBoDWwagmQ1rbq70gNdt1ktVxEA1DRB+lDAa+ieJxnLN9GYUKhrQlsAKWBgr3ITNSm435dhGDJN1ZITMObdtvHDpcg1k2JFOXA5goQM5P0DcExiwwzrwbVttA7chT3AiyEBkMOphsrT80aItZgrRDDBbL+Oac2d3JywCiu9SYKvNjAQu-nTxSM5ikvS2JsuaCbSvm4YlvW8Ymvg-bzNS7w-i7KIvAc6MMtG67CvuxbvE0z7y1++LTOO6zTjs8LBtuS7T74LHnuC4toukynDss8HVCh+HmN-FHecF7T94i-Tpc66nLOm44me-tnCK5+K+dm3HzdLVr-uO33vxOSleI7gTKfE2Ltcz8ic8sE49qM3GBFT1s8OumrYfC2PycMDqeq-OXUtT3tIMgIdMDHZDl9risX1Ur9MD-YDwPI78YNVrn0BkVSELAfxnHhhBL0-9UaX3RijFeEBgrlmkEgO0UoE6ojAvmCe2097gBUM1fwqUxQSg0EfDWScgFYAvtDa+TtL77Tco-Z+wD-4IhLpoIhyDSFPkzLfaG79vq-lUN-LYv83rqkcJqbWtCQFX1bkFBGgi1zBEVrAdO3djAayNhI2B-pGR-zXGGKCEZOQmGTCOUeJdGZ62XshUxbJcKWN6qPX2NCJb4IjmJJx5iow8l5jPTk-Vi6tzwYHSu1cs4+JMdhMxLio5BP5pGGx4Sy4B2tF3HuENa5+MSdGXiYI+YC3cdQuRusYD61iW5fJ24XbZJ0SfQIrAsLZWcRyUKLg8nxI6ZGF2dkaxK2Sc5CJjDam9P8cEouJ9bEZLTlEkgx9e41IRHUy8KTORpLtvMzubMmkrJ6e0qZmz46Fw8RU8SVSHG+MmbhShJ8LknShl4m+qyVT31YYjdhr83JcPWS8KRblhGfzET-WBQLQYyLPvIjhii4bIJUe8y+oMcGaMacsn2eika-LgXqBBQNa5ngvJyKBMybZzPbgwoOIclk12QsS3CZLtliypZkrROSCGMu3MyrBTyU72NLkSz824Wk0hMpi0KAAGYV55cIPWMPjS5S8hUMpFZGOwghtAoENNaUJJ91G4N2ZE2lmKuXqs5JqykOqpRnNpoa2AdjrnIgxfSsS3LIxoIwSytuV9MkEOCLAKY8FoQACZa4b0cPaXgAAvLINxap2mGmKh5ojoTdOQuREglFnSnFooq05PqxkEKzTm6i+bkilL5eUp11Ta6lqonmuiCr57KpkDctcDbc00Tola7VUpbWjwdZcwVJbv7ZsbT24wbInDGH4S+F1WDKV+snu8si46y1NunVYudGYF12sTuPY14yEQNoAI5EgwOrcgkDEWUX1RS9JbKFmmrdZ2jdvAL1ZGvd9Xlhdl2vKyfss1a6QDnsvT+295J7LVqPe3UdoGjL8xtOgq0CdhrUkHF3NoKZeAQEYLxcyGBaYPrkQlNSSh-BmGRCwdASs41SGLYhyj1GUSDJ-COBjCthqRXIa2xmKqCE41TYemFdDprssWSBt6zCERfOeb8rsn0RFf3BbiyFIBAFyPE6-E4SiD7aH0biwxypjFuSailU47wSAmGND7FWc5hBZKwcO2tHbzMwG0s1ZEVm8y2Z0Hhvd3mD221Zb8BDtcLM+eENZ-zu7nzBbKXB8LzqCFRaCiYYI+6i3HrS555KyIySZZbIl2DMLAN5a8ylWAZBuJEQy1l4LIFUnocmuFIq+WSrH1-Xe8lLcdnPu8ZFzrwWsQ9egyF-l8HUugfSym2k1602vBlchdLZUKquxytaJVAn22qsSiNlK63Mqbdyn2+0A7nOF1cwKmbw2qulXSid-LCN+OLz25VgrqUnuVTBK6aZ1xCIhpTplJQvlPtddaoqnKbaSYENGpAmHu24egfdESXgqFFzQTe+3QTqPMTo7G1BwIfXQu+sAzSqudKYm1zR008bJOcuDcDq6mnyE6fdeJzB85Nbbt1vZwT+nZx5sSsGtK74uRvAgG8EAA)