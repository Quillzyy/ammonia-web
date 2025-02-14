#!/usr/bin/env bash

# requirements
sudo apt update && sudo apt install -y gpg

# eza installation
sudo mkdir -p /etc/apt/keyrings
wget -qO- https://raw.githubusercontent.com/eza-community/eza/main/deb.asc | sudo gpg --dearmor -o /etc/apt/keyrings/gierens.gpg
echo "deb [signed-by=/etc/apt/keyrings/gierens.gpg] http://deb.gierens.de stable main" | sudo tee /etc/apt/sources.list.d/gierens.list
sudo chmod 644 /etc/apt/keyrings/gierens.gpg /etc/apt/sources.list.d/gierens.list
sudo apt update && sudo apt install -y eza

# zoxide
sudo apt update && sudo apt install -y zoxide

# zsh fish-like
sudo apt update && sudo apt install -y zsh-syntax-highlighting zsh-autosuggestions

# batcat
sudo apt update && sudo apt install -y bat

# chezmoi dotfiles
chezmoi init --apply Quillzyy