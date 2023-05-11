RUN: sops --encrypt --gcp-kms projects/sample-full-app/locations/global/keyRings/sops/cryptoKeys/sops-key sa_key.yaml > sa_key.enc.yaml


decrypt with: sops --decrypt sa_key.enc.yaml > helm/sa_key (REMEMBER TO DELETE AFTER YOU USE IT!)

move to the helm repo and install: ```helm install demo . -f sa_key.yaml