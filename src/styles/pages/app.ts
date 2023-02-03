import { FileX } from "phosphor-react";
import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    
})

export const ShopCartButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    minWidth: '3rem',
    height: '3rem',
    borderRadius: '6px',
    border: 'none',
    padding: '0 0.5rem',
    position: 'relative',
    cursor: 'inherit',
    backgroundColor: '$gray800',

    span: {
        position: 'absolute',
        width: '1.25rem',
        height: '1.25rem',
        borderRadius: '50%',
        top: 'calc(-1.25rem / 2)',
        right: 'calc(-1.25rem / 2)',
        color: '$gray300',
        backgroundColor: '$green500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem',
        fontWeight: 700,
      }
    
})