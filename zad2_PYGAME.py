import pygame

pygame.init()
win = pygame.display.set_mode((600, 600))

# deklarowanie kolorów
CZERWONY = (255, 0, 0)
ZIELONY = (0, 255, 0)
FIOLETOWY = (128, 0, 128)
POMARANCZOWY = (255, 165, 0)
SZARY = (128, 128, 128)

run = True
while run:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False

    # Czyszczenie ekranu
    win.fill(SZARY)

    # pozioma linia
    pygame.draw.rect(win, CZERWONY, (100, 100, 400, 30))

    # skośna linia
    pygame.draw.line(win, CZERWONY, (500, 100), (100, 400), 30)

    # pozioma linia
    pygame.draw.rect(win, CZERWONY, (100, 400, 400, 30))

    pygame.display.update()
